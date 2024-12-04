const modalClasses = {
  'body:has(dialog.mnt-modal[open])': {
    '@apply overflow-hidden': {}
  },
  '.mnt-modal': {
    '&:modal': { '@apply relative md:max-w-screen-md rounded-xl shadow-lg mnt-scrollbar': {} },
    '&::backdrop': { '@apply bg-dark/50 supports-[backdrop-filter]:backdrop-blur': {} }
  }
};

export default modalClasses;
