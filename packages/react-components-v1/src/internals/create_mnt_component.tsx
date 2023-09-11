import React, { ForwardedRef, PropsWithChildren } from 'react'
import clsx from 'clsx';

export type PolymorphicAs = Exclude<keyof JSX.IntrinsicElements, 'symbol' | 'object'> | React.ComponentType;

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

type MntComponentType<Props> = (React.ComponentType<Props> | keyof JSX.IntrinsicElements) & {
  _isMnt?: boolean
  _configFactory?: (props: Props) => Config<Props>
  _elementType?: MntComponentType<Props>
};


/**
 * Creates a component factory function to enhance basic capabilities of a passed component.
 *
 * @template Props - The props type for the Mnt component.
 *
 * @param {MntComponentType<Props>} ElementType - The ElementType for the Mnt component.
 *
 * @returns {(config: Config<Props>) => React.ForwardRefExoticComponent<Props, HTMLElement>}
 *   An object or function to determine the component styles.
 *
 * @example
 * // Usage example:
 * const Button = createMntComponent('button')({ baseClass: 'button-classname' });
 * const Paragraph createMntComponent(BaseTypography)({ baseClass: 'text-classname' });
 *
 * @see {@link MntComponentType}
 * @see {@link Config}
 * @see {@link React.ForwardRefExoticComponent}
 */
export const createMntComponent = <Props extends MntProps>(elementType: MntComponentType<Props>) => (configOrFactory: ConfigOrFactory<Props>) => {
  const configFactory = isFunction(configOrFactory) ? configOrFactory : () => configOrFactory


  if (elementType._isMnt) {
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

    const Component = As ?? config.as ?? elementType;
    return <Component ref={ref} className={classes} {...cleanProps} />
  }

  if (hasStaticProperty(elementType, 'displayName')) {
    Component.displayName = elementType.displayName || elementType.name
  }

  const MntComponent = React.forwardRef<HTMLElement, Props>(Component)

  MntComponent._isMnt = true
  MntComponent._configFactory = configFactory
  MntComponent._elementType = elementType

  return MntComponent
}

function hasStaticProperty(input: any, propertyName: string): input is Record<string, any> {
  return isFunction(input) && input.hasOwnProperty(propertyName);
}

function getClassFromProps<Props>({ config, props }: { config: Config<Props>, props: Omit<Props, 'as' | 'className' | 'variant'> }) {
  return config.classFromProps
    ? Object.entries(config.classFromProps)
      .map(([property, classnameOrFactory]) => {
        const propValue = props[property]

        if (!propValue) return null

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

function isFunction(input: any): input is Function {
  return typeof input === 'function';
}
