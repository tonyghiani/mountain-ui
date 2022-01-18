import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgArrowFromRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 4a1 1 0 00-1 1v14a1 1 0 002 0V5a1 1 0 00-1-1zm18.92 7.62a1 1 0 00-.21-.33l-4-4a1 1 0 10-1.42 1.42l2.3 2.29H7a1 1 0 000 2h11.59l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-.33 1 1 0 000-.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowFromRight);
export default ForwardRef;
