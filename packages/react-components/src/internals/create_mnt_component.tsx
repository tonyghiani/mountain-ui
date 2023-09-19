import React, { ForwardedRef, PropsWithChildren } from 'react'
import clsx from 'clsx';
import { isFunction, isString } from '@mountain-ui/utils';

export type PolymorphicAs = React.ElementType;

interface AsProps {
  as?: PolymorphicAs
}

interface VariantProps {
  variant?: string
}

export interface MntProps extends PropsWithChildren, AsProps, VariantProps {
  className?: string
}

type ClassnameOrFactory<FactoryOpts> = string | ((opts: FactoryOpts) => string)

interface Config<Props extends VariantProps> extends AsProps {
  baseClass?: string
  classFromProps?: {
    [K in keyof Props]: ClassnameOrFactory<Props[K]>;
  }
  defaultVariant?: Props['variant']
  variants?: Record<Props['variant'], string>
}

type ConfigOrFactory<Props> = Config<Props> | ((props: Props) => Config<Props>)

type MntComponent<Props> = React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<HTMLElement>> & {
  _isMnt?: boolean
  _configFactory?: (props: Props) => Config<Props>
  _elementType?: MntComponentType<Props>
}
type MntComponentType<Props> = Exclude<keyof JSX.IntrinsicElements, 'symbol' | 'object'> | MntComponent<Props>



/**
 * Creates a component factory function to enhance basic capabilities of a passed component.
 *
 * @example
 * // Usage example:
 * const Button = createMntComponent('button')({ baseClass: 'button-classname' });
 * const Paragraph createMntComponent(BaseTypography)({ baseClass: 'text-classname' });
 */
export const createMntComponent = <Props extends MntProps>(elementType: MntComponentType<Props>) => (configOrFactory: ConfigOrFactory<Props>): MntComponent<Props> => {
  const configFactory = isFunction(configOrFactory) ? configOrFactory : () => configOrFactory


  if (!isString(elementType) && elementType._isMnt) {
    return createMntComponent(elementType._elementType)((props) => ({
      ...elementType._configFactory(props),
      ...configFactory(props)
    }))
  }

  function Component(componentProps: Props, ref: ForwardedRef<HTMLElement>) {

    const { as: As, className, variant, ...props } = componentProps

    const config = isFunction(configOrFactory) ? configOrFactory(componentProps) : configOrFactory

    const cleanProps = omitBuiltProps<Props>({ config, props })

    const classFromProps = getClassFromProps<Props>({ config, props })
    const variantClass = getVariantClass<Props>({ config, variant })

    const classes = clsx(config.baseClass, variantClass, classFromProps, className)

    const TagName = As ?? config.as ?? elementType;
    return <TagName ref={ref} className={classes} {...cleanProps} />
  }

  if (hasStaticProperty(elementType, 'displayName')) {
    Component.displayName = elementType.displayName || elementType.name
  }

  const MntComponent: MntComponent<Props> = React.forwardRef<HTMLElement, Props>(Component)

  MntComponent._isMnt = true
  MntComponent._configFactory = configFactory
  MntComponent._elementType = elementType

  return MntComponent
}

function hasStaticProperty(input: any, propertyName: string): input is Function {
  return isFunction(input) && propertyName in input;
}

function getClassFromProps<Props>({ config, props }: { config: Config<Props>, props: Omit<Props, 'as' | 'className' | 'variant'> }) {
  return config.classFromProps
    ? Object.entries(config.classFromProps)
      .map(([property, classnameOrFactory]) => {
        const propValue = props[property]

        return isFunction(classnameOrFactory) ? classnameOrFactory(propValue) : classnameOrFactory
      }).filter(Boolean).join(' ')
    : ''
}

function getVariantClass<Props extends MntProps>({ config, variant }: { config: Config<Props>, variant: Props['variant'] }) {
  return config.variants ? config.variants[variant ?? config.defaultVariant] : ''
}

function omitBuiltProps<Props>({ config, props }: { config: Config<Props>, props: Omit<Props, 'as' | 'className' | 'variant'> }) {
  if (!config.classFromProps) return props;

  return Object.entries(props)
    .reduce((cleanProps, [property, value]) => {
      if (!config.classFromProps.hasOwnProperty(property)) {
        cleanProps[property] = value
      }
      return cleanProps
    }, {})
}

