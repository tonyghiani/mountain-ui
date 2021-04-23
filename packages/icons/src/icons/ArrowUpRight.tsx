import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgArrowUpRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.92 6.62a1 1 0 00-.54-.54A1 1 0 0017 6H7a1 1 0 000 2h7.59l-8.3 8.29a1 1 0 000 1.42 1 1 0 001.42 0L16 9.41V17a1 1 0 002 0V7a1 1 0 00-.08-.38z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowUpRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
