import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUserCheck(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.3 12.22A4.92 4.92 0 0015 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 002 19.5a1 1 0 002 0 6 6 0 0112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM10 11.5a3 3 0 113-3 3 3 0 01-3 3zm11.71-2.37a1 1 0 00-1.42 0l-2 2-.62-.63a1 1 0 00-1.42 0 1 1 0 000 1.41l1.34 1.34a1 1 0 001.41 0l2.67-2.67a1 1 0 00.04-1.45z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUserCheck);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;