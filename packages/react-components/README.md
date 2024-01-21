# @mountain-ui/react-components

<p>
  <a href="https://www.npmjs.com/package/@mountain-ui/react-components" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/v/@mountain-ui/react-components?style=for-the-badge" />
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

Welcome to the @mountain-ui/react-components library documentation! This component library follows the atomic design structure, providing a scalable and organized approach to building UI components. Leveraging the power of [`react-mnt`](https://github.com/tonyghiani/mnt), our library offers features such as polymorphism, composability, and strong typing for seamless integration into your React applications.

## Prerequisites

Before integrating our component library into your project, ensure that you have the following prerequisites:

- **Node.js:** Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

To install and use the @mountain-ui/react-components library, follow these steps:

1. Open a terminal window in your project directory.

2. Run the following command to install the component library:

   ```bash
   npm install @mountain-ui/react-components
   ```

3. Once installed, you can import and use the components in your project.

## Usage Example

Here's a simple example demonstrating how to use some of the components in your React application:

```jsx
import React from 'react';
import { MntButton, MntInput, MntCodeBlock } from '@mountain-ui/react-components';

function App() {
  return (
    <div>
      <MntButton variant='solid'>Click me</MntButton>
      <MntInput type='text' placeholder='Enter text' />
      <MntCodeBlock language='jsx'>
        {`function example() {
  // Your code here
}`}
      </MntCodeBlock>
    </div>
  );
}

export default App;
```

## Components

For detailed information about each component, refer to the sub-pages:

### Atoms

- [MntButton](./src/components/atoms/Button)
- [MntCode](./src/components/atoms/Code)
- [MntIcon](./src/components/atoms/Icon)
- [MntInput](./src/components/atoms/Input)
- [MntBox](./src/components/atoms/Layout)
- [MntGrid](./src/components/atoms/Layout/Grid)
- [MntContainer](./src/components/atoms/Layout/Container)
- [MntList](./src/components/atoms/List)
- [MntListItem](./src/components/atoms/List)
- [MntTag](./src/components/atoms/Tag)
- [MntText](./src/components/atoms/Typography/Text)
- [MntParagraph](./src/components/atoms/Typography/Paragraph)
- [MntHeading](./src/components/atoms/Typography/Heading)
- [MntHeading](./src/components/atoms/Typography/Heading)
- [MntVisuallyHidden](./src/components/atoms/VisuallyHidden)

### Molecules

- [MntAccordion](./src/components/molecules/Accordion)
- [MntCodeBlock](./src/components/molecules/CodeBlock)
- [MntRangeInput](./src/components/molecules/RangeInput)
