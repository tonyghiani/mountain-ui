# @mountain-ui/react-hooks

<p>
  <a href="https://www.npmjs.com/package/@mountain-ui/react-hooks" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/v/@mountain-ui/react-hooks?style=for-the-badge" />
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

## Prerequisites

Before integrating the @mountain-ui/react-hooks library into your project, ensure that you have the following prerequisites:

- **Node.js:** Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

To install and leverage the power of the @mountain-ui/react-hooks library, follow these steps:

1. Open a terminal window in your project directory.

2. Run the following command to install the hooks library:

   ```bash
   npm install @mountain-ui/react-hooks
   ```

3. Once installed, you can import and use the hooks in your project.

## Usage Example

Here's a simple example demonstrating how to use some of the custom hooks in your React application:

```jsx
import React from 'react';
import { useBoolean, useDarkMode, useEventListener } from '@mountain-ui/react-hooks';

function App() {
  // Example usage of useBoolean
  const [value, { on, off, toggle }] = useBoolean(false);

  // Example usage of useDarkMode
  const isDarkMode = useDarkMode();

  // Example usage of useEventListener
  useEventListener('DOMContentLoaded', () => {
    console.log('Document Loaded!');
  });

  return (
    <div>
      <p>Boolean Value: {value.toString()}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={on}>Set True</button>
      <button onClick={off}>Set False</button>

      <p>Dark Mode: {isDarkMode ? 'Enabled' : 'Disabled'}</p>
    </div>
  );
}

export default App;
```

## Custom Hooks

For detailed information about each custom hook, refer to the sub-pages:

- [useBoolean](./src/useBoolean)
- [useDarkMode](./src/useDarkMode)
- [useEventListener](./src/useEventListener)
- [useFontSize](./src/useFontSize)
- [useLocalStorage](./src/useLocalStorage)
- [useMediaQuery](./src/useMediaQuery)
- [useOutsideClick](./src/useOutsideClick)
- [usePrefersDarkMode](./src/usePrefersDarkMode)
- [useToggle](./src/useToggle)
- [useUpdateEffect](./src/useUpdateEffect)
