import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDumbbell(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.48 6.55l-2.84-2.84a1 1 0 00-1.42 0 1 1 0 000 1.41l2.12 2.12-8.1 8.1-2.12-2.12a1 1 0 00-1.41 0 1 1 0 000 1.42l2.81 2.81 2.81 2.81a1 1 0 00.71.3 1 1 0 00.71-1.71l-2.09-2.09 8.1-8.1 2.12 2.12a1 1 0 101.41-1.42zM3.71 17.46a1 1 0 00-1.42 1.42l2.83 2.83a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42zm18-12.34l-2.83-2.83a1 1 0 00-1.42 1.42l2.83 2.83a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDumbbell);
export default ForwardRef;
