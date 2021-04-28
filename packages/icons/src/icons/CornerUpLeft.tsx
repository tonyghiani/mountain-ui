import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCornerUpLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.69 6.63h-7l2.92-2.92a1 1 0 000-1.42 1 1 0 00-1.41 0L4.61 6.92a1 1 0 00-.22.33 1 1 0 000 .76 1.19 1.19 0 00.22.33L9.24 13a1 1 0 00.7.3 1 1 0 00.71-1.71L7.73 8.63h7a3 3 0 013 3V21a1 1 0 002 0v-9.37a5 5 0 00-5.04-5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCornerUpLeft);
export default ForwardRef;
