import React, { useState } from 'react';
import { render } from 'mui-testing-tools';

import RangeInput, { RangeInputProps } from './RangeInput';

const Component = (props: Omit<RangeInputProps, 'children'>) => {
  const [values, setValues] = useState(props.values);
  return (
    <RangeInput values={values} onChange={setValues} {...props}>
      <RangeInput.Thumb />
    </RangeInput>
  );
};

describe('RangeInput', () => {
  it('should render correctly on mount', () => {
    // @ts-ignore
    const { container } = render(<Component values={[]} min={1000} max={5000} step={1} />);
    expect(container).toBeInTheDocument();
  });
});
