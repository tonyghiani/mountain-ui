import React, { useState } from 'react';

import { Container } from '../../atoms';

import RangeInput from './RangeInput';

export default {
  title: 'Molecules/RangeInput',
  component: RangeInput
};

export const Basic = args => {
  const [values, setValues] = useState(args.values);
  return (
    <Container p={6} marginTop={150}>
      <RangeInput {...args} values={values} onChange={setValues} min={1000} max={5000} step={1}>
        <RangeInput.Thumb />
      </RangeInput>
    </Container>
  );
};

Basic.args = {
  values: [3000]
};

Basic.parameters = {
  jest: ['RangeInput.test.js']
};
