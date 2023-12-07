const inputClasses = {
  '.mnt-input': {
    '@apply w-full relative focus-within:[--text-input:theme(colors.blue.500)] focus-within:[--bg-input:theme(colors.blue.50)] focus-within:bg-opacity-20':
      {},
    '&-wrapper': {
      '@apply w-full rounded-lg bg-[--bg-input] shadow-input focus-within:shadow-input-focus flex items-center flex-nowrap gap-2 transition duration-200':
        {}
    },
    '&-node': {
      '@apply w-full text-dark font-medium border-0 bg-transparent placeholder:font-normal': {}
    },
    '&-default': {
      '@apply [--text-input:theme(colors.gray.500)] [--bg-input:theme(colors.gray.50)]': {}
    },
    '&-success': {
      '@apply [--text-input:theme(colors.green.600)] [--bg-input:theme(colors.emerald.50)]': {}
    },
    '&-warning': {
      '@apply [--text-input:theme(colors.yellow.600)] [--bg-input:theme(colors.yellow.50)]': {}
    },
    '&-error': {
      '@apply [--text-input:theme(colors.red.600)] [--bg-input:theme(colors.red.50)]': {}
    }
  }
};

export default inputClasses;
