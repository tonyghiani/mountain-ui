const accordionClasses = {
  '.mnt-accordion': {
    '@apply overflow-hidden': {},

    '&-summary': { '@apply cursor-pointer': {} },
    '&-detail': { '@apply will-change-[height] transition-height ease-in-out duration-150': {} }
  }
};

export default accordionClasses;
