const codeblockClasses = {
  '.mnt-codeblock': {
    '@apply relative overflow-hidden rounded-xl border-4 border-solid border-sky-950 shadow-xl': {},

    '&-syntax': {
      '@apply absolute top-1 right-1 px-2 py-0.5 rounded-md uppercase text-caption text-light font-bold bg-sky-700':
        {}
    },
    '&-pre': { '@apply mnt-scrollbar overflow-auto m-0 p-4 bg-sky-950': {} }
  }
};

export default codeblockClasses;
