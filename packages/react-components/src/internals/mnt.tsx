import React, { ElementType, ForwardedRef } from 'react';
import { isFunction } from '@mountain-ui/utils';

import { supportedAttributesSet } from './mnt_attributes';

export interface MntProps {
  as?: MntComponentType;
}

type AttrsResult<T extends MntConfigOrFactory> = T extends (..._args: any) => infer P
  ? P extends object
  ? P
  : never
  : T extends object
  ? T
  : never;

type AttrsTarget<
  Config extends MntConfigOrFactory,
  FallbackTarget extends MntComponentType
> = AttrsResult<Config> extends { as: infer RuntimeTarget }
  ? RuntimeTarget extends MntComponentType
  ? RuntimeTarget
  : FallbackTarget
  : FallbackTarget;

interface Mnt<Target extends MntComponentType, TargetHtmlProps extends object> {
  <Props extends object = BaseObject>(
    ..._taggedStyle: TaggedStyle<Assign<TargetHtmlProps, Props>>
  ): MntComponent<Target, Assign<TargetHtmlProps, Props>>;

  attrs<
    Props extends object = BaseObject,
    PrivateMergedProps extends object = Assign<TargetHtmlProps, Props>,
    PrivateAttrsArg extends
    MntConfigOrFactory<PrivateMergedProps> = MntConfigOrFactory<PrivateMergedProps>,
    PrivateResolvedTarget extends MntComponentType = AttrsTarget<PrivateAttrsArg, Target>
  >(
    _configFactory: PrivateAttrsArg
  ): Mnt<
    PrivateResolvedTarget,
    PrivateResolvedTarget extends MntComponentType
    ? Assign<React.ComponentPropsWithRef<PrivateResolvedTarget>, Props>
    : PrivateMergedProps
  >;
}

interface MntComponent<Target extends MntComponentType = any, Props extends object = BaseObject>
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Props> & React.RefAttributes<unknown>
  > {
  <TAs extends MntComponentType>(_props: MntComponentProps<TAs, Props>): React.ReactNode;

  _classesFactory: ClassesFactory<Props>;
  _configFactory: MntConfigFactory<Props>;
  _elementType: Target;
  _isMnt: boolean;
}

type MntConfigFactory<Props> = (_props: MntProps & Props) => MntProps & Partial<Props>;
type MntConfigOrFactory<Props extends object = BaseObject> =
  | (MntProps & Partial<Props>)
  | MntConfigFactory<Props>;

type ClassesFactory<Props> = (_props: Assign<Props, MntProps>) => string;
type ClassesFactoryOrString<Props> = ClassesFactory<Props> | string;

type TaggedStyle<Props> = [TemplateStringsArray, ...ClassesFactoryOrString<Props>[]];

type MntComponentType = ElementType | MntComponent;

type MntComponentProps<
  TAs extends MntComponentType = MntComponentType,
  Props extends object = BaseObject,
  TAsProps extends object = MntComponentType extends TAs ? BaseObject : React.ComponentPropsWithRef<TAs>,
> = Omit<Assign<Props, TAsProps>, 'as'> & { as?: TAs }

export type Assign<A, B> = Omit<A, keyof B> & B;
export type NoInfer<T> = [T][T extends any ? 0 : never];
type BaseObject = {};

const isMnt = (arg: MntComponentType): arg is MntComponent => (arg as MntComponent)._isMnt === true

/**
 * Creates a component factory function to enhance basic capabilities of a passed component.
 *
 * @example
 * // Usage example:
 * const Button = mnt('button')`text-blue ${props => props.disabled && text-disabled}`;
 * const Button = mnt(BaseTypography)`text-blue ${props => props.disabled && text-disabled}`;
 * const Button = mnt(BaseTypography).attrs({as: 'a'})`text-blue ${props => props.disabled && text-disabled}`;
 * const Button = mnt(BaseTypography).attrs((props) => ({as: props.variant}))`text-blue ${props => props.disabled && text-disabled}`;
 */
export const mnt = <
  Target extends MntComponentType,
  TargetHtmlProps extends object = Target extends MntComponentType
  ? React.ComponentPropsWithRef<Target>
  : BaseObject
>(
  elementType: Target,
  config: MntConfigOrFactory<BaseObject> = {}
): Mnt<Target, TargetHtmlProps> => {
  const builder = <Props extends object = BaseObject>(
    ...taggedStyles: TaggedStyle<Assign<TargetHtmlProps, Props>>
  ) => {
    const classesFactory = getClasses(...taggedStyles);
    const configFactory = isFunction(config) ? config : () => config;

    if (isMnt(elementType)) {
      return mnt(elementType._elementType, props => ({
        ...elementType._configFactory(props),
        ...configFactory(props)
      })) <Props>`
          ${props => elementType._classesFactory(props)}
          ${props => classesFactory(props)}
        `;
    }

    return componentTemplate<Target, Assign<TargetHtmlProps, Props>>(elementType, classesFactory, configFactory);
  };

  builder.attrs = <
    Props extends object = BaseObject,
    PrivateMergedProps extends object = Assign<TargetHtmlProps, Props>,
    PrivateAttrsArg extends
    MntConfigOrFactory<PrivateMergedProps> = MntConfigOrFactory<PrivateMergedProps>,
    PrivateResolvedTarget extends MntComponentType = AttrsTarget<PrivateAttrsArg, Target>
  >(
    config: PrivateAttrsArg
  ) => {
    return mnt<
      PrivateResolvedTarget,
      PrivateResolvedTarget extends MntComponentType
      ? Assign<Assign<TargetHtmlProps, React.ComponentPropsWithRef<PrivateResolvedTarget>>, Props>
      : PrivateMergedProps
    >(elementType as unknown as PrivateResolvedTarget, config);
  };

  return builder;
};

const componentTemplate = <Target extends MntComponentType, Props extends object>(
  elementType: Target,
  classesFactory: ClassesFactory<Props>,
  configFactory: MntConfigFactory<Props>
) => {
  function Component<TAs extends MntComponentType>(
    componentProps: MntComponentProps<TAs, Props>,
    ref: ForwardedRef<unknown>
  ) {
    const { as: As, className, ...props } = componentProps;

    const { as: configAs, ...config } = configFactory(componentProps as Props);
    const taggedClasses = classesFactory(componentProps as Props);

    const classes = [taggedClasses, className].filter(Boolean).join(' ').trim();

    const cleanedConfig = cleanProps(config);
    const cleanedProps = cleanProps(props);

    const TagName = As ?? configAs ?? elementType;
    return <TagName {...cleanedConfig} {...cleanedProps} ref={ref} className={classes} />;
  }

  if (hasStaticProperty(elementType, 'displayName')) {
    Component.displayName = elementType.displayName || elementType.name;
  }

  const MntComponent = React.forwardRef(Component) as MntComponent<Target, Props>;

  MntComponent._classesFactory = classesFactory;
  MntComponent._configFactory = configFactory;
  MntComponent._elementType = elementType;
  MntComponent._isMnt = true;

  return MntComponent;
};

function getClasses<Props = {}>(...taggedStyles: TaggedStyle<Props>): ClassesFactory<Props> {
  return (props) => {
    const [statics, ...dynamics] = taggedStyles;
    const chunks = [];

    for (let i = 0; i < statics.length; i++) {
      const staticChunk = statics[i].trim();
      if (staticChunk) chunks.push(staticChunk);
      if (i < dynamics.length) {
        const classBuilder = dynamics[i];
        const dynamicClass = isFunction(classBuilder) ? classBuilder(props) : classBuilder;
        if (dynamicClass) chunks.push(dynamicClass.trim());
      }
    }

    return chunks.join(' ');
  };
}

function cleanProps<Props extends object>(props: Props) {
  const cleanedProps: Partial<Props> = {};

  for (const prop in props) {
    if (supportedAttributesSet.has(prop)) cleanedProps[prop] = props[prop];
  }

  return cleanedProps;
}

function hasStaticProperty(input: unknown, propertyName: string): input is Function {
  return isFunction(input) && propertyName in input;
}
