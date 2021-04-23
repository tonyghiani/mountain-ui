import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgThermometer(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M16.29 6.29l-7 7a1 1 0 000 1.42 1 1 0 001.42 0l7-7a1 1 0 10-1.42-1.42zm4.25-2.83a5 5 0 00-7.08 0l-8.17 8.23a1 1 0 00-.29.7v5.19l-2.71 2.71a1 1 0 000 1.42 1 1 0 001.42 0L6.42 19h5.19a1 1 0 00.7-.29l8.23-8.17a5 5 0 000-7.08zm-1.42 5.66L11.2 17H7v-4.2l7.88-7.92a3 3 0 014.24 4.24z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgThermometer);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;