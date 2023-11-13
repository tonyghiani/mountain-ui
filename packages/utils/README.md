# @mountain-ui/utils

<p>
  <a href="https://www.npmjs.com/package/@mountain-ui/utils" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/v/@mountain-ui/utils?style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D12.6.0-blue.svg?style=for-the-badge" />
  <img src="https://img.shields.io/badge/yarn-%3E%3D1.22.0-blue.svg?style=for-the-badge" />
  <a href="https://github.com/tonyghiani/mountain-ui/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" />
  </a>
  <a href="https://twitter.com/tonyghiani" target="_blank">
    <img alt="Twitter: tonyghiani" src="https://img.shields.io/twitter/follow/tonyghiani?style=for-the-badge&logo=x" />
  </a>
</p>

# @mountain-ui/utils

## Prerequisites

Before integrating the @mountain-ui/utils library into your project, ensure that you have the following prerequisites:

- **Node.js:** Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

To harness the power of the @mountain-ui/utils library, follow these straightforward steps:

1. Open a terminal window in your project directory.

2. Run the following command to install the utils library:

   ```bash
   npm install @mountain-ui/utils
   ```

3. Once installed, you can import and use the utilities in your project.

## Usage Example

Here's a simple example demonstrating how to use some of the utilities in your project:

```javascript
import {
  debounce,
  deepMerge,
  hasWindow,
  isBareObject,
  isFunction,
  isString,
  pipe,
  sleep,
  toLowerCaseFirst,
  toUpperCaseFirst
} from '@mountain-ui/utils';

// Example usage of debounce
const debouncedFunction = debounce(() => {
  console.log('Debounced function executed.');
}, 300);

// Example usage of deepMerge
const mergedObject = deepMerge({ a: 1 }, { b: 2, a: 3 });

// Example usage of isFunction
console.log(isFunction(() => {})); // true
console.log(isFunction('not a function')); // false

// Example usage of sleep
async function delayedFunction() {
  console.log('Before sleep');
  await sleep(2000);
  console.log('After sleep');
}

// Example usage of toUpperCaseFirst
const uppercased = toUpperCaseFirst('hello');

// Example usage of pipe
const addOne = x => x + 1;
const double = x => x * 2;
const result = pipe(addOne, double)(3); // (3 + 1) * 2 = 8

console.log(result);
```

## Utilities

For detailed information about each utility, refer to the sub-pages:

- [debounce](./src/debounce)
- [deepMerge](./src/deepMerge)
- [hasWindow](./src/hasWindow)
- [isBareObject](./src/isBareObject)
- [isFunction](./src/isFunction)
- [isString](./src/isString)
- [pipe](./src/pipe)
- [sleep](./src/sleep)
- [toLowerCaseFirst](./src/toLowerCaseFirst)
- [toUpperCaseFirst](./src/toUpperCaseFirst)
