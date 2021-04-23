import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCornerUpRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.61 7.25a1 1 0 00-.22-.33l-4.63-4.63a1 1 0 00-1.41 0 1 1 0 000 1.42l2.92 2.92h-8a4 4 0 00-4 4V21a1 1 0 002 0V10.63a2 2 0 012-2h8l-2.92 2.92a1 1 0 00.71 1.71 1 1 0 00.7-.3l4.63-4.62a1.19 1.19 0 00.22-.34 1 1 0 000-.75z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCornerUpRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;