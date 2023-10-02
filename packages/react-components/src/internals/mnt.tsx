import React, { ForwardedRef, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { isBareObject, isFunction, isString } from '@mountain-ui/utils';
import { MntConfigurationError } from './mnt_errors';

export interface MntProps extends PropsWithChildren {
  as?: React.ElementType;
  className?: string
}

type MntConfigFactory<Props> = (props: Props) => Props;
type MntConfigOrFactory<Props> = Props | MntConfigFactory<Props>;

type ClassesFactory<Props> = (props: Props) => string;
type ClassesFactoryOrString<Props> = ClassesFactory<Props> | string;

type TaggedStyle<Props> = [TemplateStringsArray, ...ClassesFactoryOrString<Props>[]];

type MntComponent<Props = any> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<unknown>
> & {
  _classesFactory?: ClassesFactory<Props>;
  _configFactory?: MntConfigFactory<Props>;
  _elementType?: MntComponentType;
  _isMnt?: boolean;
};

type SupportedHTMLElement = Exclude<keyof JSX.IntrinsicElements, 'symbol' | 'object'>;

type MntComponentType = SupportedHTMLElement | MntComponent;

type MntComponentProps<
  Props,
  Target = MntComponentType,
> = Assign<React.AllHTMLAttributes<Target>, Props> & MntProps;

export type Assign<A, B> = Omit<A, keyof B> & B

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
export const mnt = <Props,>(elementType: MntComponentType) => {
  const builder = (
    ...taggedStyles: TaggedStyle<MntComponentProps<Props, typeof elementType>>
  ): MntComponent<MntComponentProps<Props, typeof elementType>> => {
    return componentTemplate<Props, typeof elementType>(elementType)(...taggedStyles);
  };

  builder.attrs = (config: MntConfigOrFactory<MntComponentProps<Props, typeof elementType>>) => {
    if (isBareObject(config) || isFunction(config)) {
      return componentTemplate<Props, typeof elementType>(elementType, config);
    } else {
      throw new MntConfigurationError();
    }
  };

  return builder;
};

const componentTemplate = <Props, Target extends MntComponentType>(
  elementType: Target,
  config: MntConfigOrFactory<MntComponentProps<Props, Target>> = (p: MntComponentProps<Props, Target>) => p
) =>
  (...taggedStyles: TaggedStyle<MntComponentProps<Props, Target>>): MntComponent<MntComponentProps<Props, Target>> => {
    const classesFactory = getClasses<MntComponentProps<Props, Target>>(...taggedStyles);
    const configFactory = isFunction(config) ? config : () => config;

    if (!isString(elementType) && elementType._isMnt) {
      return mnt<Props>(elementType._elementType).attrs(props => ({
        ...elementType._configFactory(props),
        ...configFactory(props)
      }))`
      ${props => elementType._classesFactory(props)}
      ${props => classesFactory(props)}
    `;
    }

    function Component(componentProps: MntComponentProps<Props, Target>, ref: ForwardedRef<unknown>) {
      const { as: As, className, ...props } = componentProps;

      const taggedClasses = classesFactory(componentProps);

      const classes = clsx(taggedClasses, className);

      const config = configFactory(componentProps);

      const TagName = As ?? config.as ?? elementType;
      return <TagName ref={ref} className={classes} {...props} />;
    }

    if (hasStaticProperty(elementType, 'displayName')) {
      Component.displayName = elementType.displayName || elementType.name;
    }

    const MntComponent: MntComponent<MntComponentProps<Props, Target>> = React.forwardRef<unknown, MntComponentProps<Props, Target>>(
      Component
    );

    MntComponent._classesFactory = classesFactory;
    MntComponent._configFactory = configFactory;
    MntComponent._elementType = elementType;
    MntComponent._isMnt = true;

    return MntComponent;
  };

function getClasses<Props>(...taggedStyles: TaggedStyle<Props>) {
  return (props: Props) => {
    const [statics, ...dynamics] = taggedStyles;
    const chunks = [];

    for (let i = 0; i < statics.length; i++) {
      const staticChunk = statics[i].trim();
      if (staticChunk) chunks.push(staticChunk);
      if (i < dynamics.length) {
        const classBuilder = dynamics[i];
        const dynamicClass = isFunction(classBuilder) ? classBuilder(props) : classBuilder;
        chunks.push(dynamicClass.trim());
      }
    }

    return chunks.join(' ');
  };
}

function hasStaticProperty(input: any, propertyName: string): input is Function {
  return isFunction(input) && propertyName in input;
}
