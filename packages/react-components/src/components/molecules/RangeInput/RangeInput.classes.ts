const rangeInputClasses = {
  '.mnt-range-input': {
    '@apply overflow-hidden': {},

    '&-track': {
      '@apply w-full h-3 rounded-lg	bg-gradient-to-r from-sky-400 to-sky-200 border-4 border-solid border-transparent bg-clip-content':
        {}
    },
    '&-thumb': {
      '@apply w-3 h-3 rounded-full bg-blue-400 transition-all ease-in-out duration-100 active:scale-125':
        {}
    }
  }
};

export default rangeInputClasses;
