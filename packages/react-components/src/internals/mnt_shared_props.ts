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
};
export type JustifyContent = keyof typeof JUSTIFY_CONTENT;
export const justifyContent = ({ justifyContent: justify = 'normal' }) => JUSTIFY_CONTENT[justify];

/**
 * `align-items` options
 */
export const ALIGN_ITEMS = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch'
};
export type AlignItems = keyof typeof ALIGN_ITEMS;
export const alignItems = ({ alignItems: alignment = 'start' }) => ALIGN_ITEMS[alignment];
