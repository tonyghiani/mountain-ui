const accordionClasses = {
  '.mnt-breadcrumbs': {
    '@apply flex': {},
    '& > ol > li': { '@apply inline': {} },
    '& > ol > li:not(:first-child)': {
      '@apply before:content-[attr(data-separator)] before:mx-1.5': {}
    }
  }
};

export default accordionClasses;
