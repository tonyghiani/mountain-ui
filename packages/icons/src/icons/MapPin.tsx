import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMapPin(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16.37 12.79a1 1 0 00-.74 1.86C17.09 15.23 18 16.13 18 17c0 1.42-2.46 3-6 3s-6-1.58-6-3c0-.87.91-1.77 2.37-2.35a1 1 0 00-.74-1.86C5.36 13.69 4 15.26 4 17c0 2.8 3.51 5 8 5s8-2.2 8-5c0-1.74-1.36-3.31-3.63-4.21zM11 9.86V17a1 1 0 002 0V9.86a4 4 0 10-2 0zM12 4a2 2 0 11-2 2 2 2 0 012-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMapPin);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;