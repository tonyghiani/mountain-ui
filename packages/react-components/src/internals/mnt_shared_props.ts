/**
 * `justify-content` options
 */
export const JUSTIFY_CONTENT = {
  normal: 'justify-normal',
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch'
} as const;
export type JustifyContent = keyof typeof JUSTIFY_CONTENT;
export const justifyContent = ({ justifyContent: justify = 'normal' }) =>
  JUSTIFY_CONTENT[justify as JustifyContent];

/**
 * `justify-content` options
 */
export const JUSTIFY_ITEMS = {
  start: 'justify-items-start',
  end: 'justify-items-end',
  center: 'justify-items-center',
  stretch: 'justify-items-stretch'
} as const;
export type JustifyItems = keyof typeof JUSTIFY_ITEMS;
export const justifyItems = ({ justifyItems: justify = 'start' }) =>
  JUSTIFY_ITEMS[justify as JustifyItems];

/**
 * `align-items` options
 */
export const ALIGN_ITEMS = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch'
} as const;
export type AlignItems = keyof typeof ALIGN_ITEMS;
export const alignItems = ({ alignItems: alignment = 'start' }) =>
  ALIGN_ITEMS[alignment as AlignItems];
