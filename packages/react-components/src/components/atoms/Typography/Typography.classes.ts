const typographyClasses = {
  '.mnt-text': {
    '@apply leading-relaxed': {},

    '&-primary': { '@apply text-body text-[--c-text-primary]': {} },
    '&-secondary': { '@apply text-secondaryBody text-[--c-text-secondary]': {} },
    '&-caption': { '@apply text-caption text-[--c-text-caption]': {} }
  },
  '.mnt-heading': {
    '@apply font-bold tracking-wide': {},

    '&-h1': { '@apply text-h1 leading-snug text-[--c-heading1]': {} },
    '&-h2': { '@apply text-h2 leading-snug text-[--c-heading2]': {} },
    '&-h3': { '@apply text-h3 leading-snug text-[--c-heading3]': {} },
    '&-h4': { '@apply text-h4 leading-normal text-[--c-heading4]': {} },
    '&-h5': { '@apply text-h5 leading-normal text-[--c-heading5]': {} },
    '&-h6': { '@apply text-h6 leading-normal text-[--c-heading6]': {} }
  }
};

export default typographyClasses;
