import React, { ForwardedRef, PropsWithChildren } from 'react'
import clsx from 'clsx';
import { isBareObject, isFunction, isString } from '@mountain-ui/utils';
import { MntConfigurationError } from './mnt_errors';

export interface MntProps extends PropsWithChildren {
  as?: React.ElementType
  className?: string
}

type MntConfig<Props> = Props & MntProps
type MntConfigFactory<Props> = (props: Props) => MntConfig<Props>
type MntConfigOrFactory<Props> = MntConfig<Props> | MntConfigFactory<Props>

type ClassesFactory<Props> = (props: Props) => string
type ClassesFactoryOrString<Props> = ClassesFactory<Props> | string

type TaggedStyle<Props> = [TemplateStringsArray, ...ClassesFactoryOrString<Props>[]]

type MntComponent<Props> = React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<unknown>> & {
  _classesFactory?: ClassesFactory<Props>
  _configFactory?: MntConfigFactory<Props>
  _elementType?: MntComponentType<Props>
  _isMnt?: boolean
}
type MntComponentType<Props> = Exclude<keyof JSX.IntrinsicElements, 'symbol' | 'object'> | MntComponent<Props>

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
export const mnt = <Props,>(elementType: MntComponentType<Props & MntProps>) => {
  const builder = (...taggedStyles: TaggedStyle<Props & MntProps>): MntComponent<Props & MntProps> => {
    return componentTemplate<Props & MntProps>(elementType)(...taggedStyles)
  }

  builder.attrs = (config: MntConfigOrFactory<Props>) => {
    if (isBareObject(config) || isFunction(config)) {
      return componentTemplate(elementType, config)
    } else {
      throw new MntConfigurationError()
    }
  }

  return builder
}

const componentTemplate = <Props,>(elementType: MntComponentType<MntConfig<Props>>, config: MntConfigOrFactory<Props> = (p: Props) => (p)) => (...taggedStyles: TaggedStyle<Props>): MntComponent<Props> => {
  const classesFactory = getClasses<MntConfig<Props>>(...taggedStyles)
  const configFactory = isFunction(config) ? config : () => config

  if (!isString(elementType) && elementType._isMnt) {
    return mnt(elementType._elementType).attrs((props) => ({
      ...elementType._configFactory(props),
      ...configFactory(props)
    }))`
      ${props => elementType._classesFactory(props)}
      ${props => classesFactory(props)}
    `
  }

  function Component(componentProps: MntConfig<Props>, ref: ForwardedRef<unknown>) {

    const { as: As, className, ...props } = componentProps

    const taggedClasses = classesFactory(componentProps)

    const classes = clsx(taggedClasses, className)

    const config = configFactory(componentProps)

    const TagName = As ?? config.as ?? elementType;
    return <TagName ref={ref} className={classes} {...props} />
  }

  if (hasStaticProperty(elementType, 'displayName')) {
    Component.displayName = elementType.displayName || elementType.name
  }

  const MntComponent: MntComponent<Props> = React.forwardRef<unknown, MntConfig<Props>>(Component)

  MntComponent._classesFactory = classesFactory
  MntComponent._configFactory = configFactory
  MntComponent._elementType = elementType
  MntComponent._isMnt = true

  return MntComponent
}

function getClasses<Props>(...taggedStyles: TaggedStyle<Props>) {
  return (props: Props) => {
    const [statics, ...dynamics] = taggedStyles
    const chunks = []

    for (let i = 0; i < statics.length; i++) {
      const staticChunk = statics[i].trim()
      if (staticChunk) chunks.push(staticChunk);
      if (i < dynamics.length) {
        const classBuilder = dynamics[i]
        const dynamicClass = isFunction(classBuilder) ? classBuilder(props) : classBuilder
        chunks.push(dynamicClass.trim());
      }
    }

    return chunks.join(' ')
  }
}

function hasStaticProperty(input: any, propertyName: string): input is Function {
  return isFunction(input) && propertyName in input;
}