import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgStepBackward(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M20.28 3.43a3.23 3.23 0 00-3.29 0L8 8.84V6a3 3 0 00-6 0v12a3 3 0 006 0v-2.84l9 5.37a3.28 3.28 0 001.68.47 3.24 3.24 0 001.61-.43 3.38 3.38 0 001.72-3V6.42a3.38 3.38 0 00-1.73-2.99zM6 18a1 1 0 01-2 0V6a1 1 0 012 0zm14-.42a1.4 1.4 0 01-.71 1.25 1.23 1.23 0 01-1.28 0l-9.33-5.6a1.45 1.45 0 010-2.46L18 5.19a1.23 1.23 0 01.67-.19 1.29 1.29 0 01.62.17A1.4 1.4 0 0120 6.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStepBackward);
export default ForwardRef;
