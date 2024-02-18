const btnClasses = {
  '.mnt-btn': {
    '@apply relative flex-center gap-2 w-fit border-0 rounded-lg font-medium text-body py-2 px-4 cursor-pointer transition ease-out duration-150 disabled:text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed':
      {},
    '&-primary': { '@apply text-blue-700 bg-blue-600 from-blue-600 to-blue-400': {} },
    '&-accent': { '@apply text-purple-700 bg-purple-600 from-purple-600 to-purple-400': {} },
    '&-success': { '@apply text-green-600 bg-green-600 from-green-600 to-green-400': {} },
    '&-warning': {
      '@apply text-yellow-600 bg-yellow-500 from-yellow-600 to-yellow-400': {}
    },
    '&-danger': { '@apply text-red-700 bg-red-600 from-red-600 to-red-400': {} },
    '&-disabled': { '@apply text-gray-600 bg-gray-500 from-gray-600 to-gray-400': {} },
    '&-shade': { '@apply bg-opacity-20 hover:bg-opacity-30': {} },
    '&-solid': { '@apply !text-light': {} },
    '&-outline': { '@apply bg-opacity-10 hover:bg-opacity-30 shadow-outline-button': {} },
    '&-gradient': { '@apply bg-gradient-to-br hover:bg-gradient-to-r !text-light': {} },
    '&-link': { '@apply !bg-transparent hover:underline underline-offset-4': {} },
    '&-text': { '@apply !bg-transparent hover:scale-105': {} }
  }
};

export default btnClasses;
