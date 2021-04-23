import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgLockSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.84 5.38a2 2 0 012.57.21A2 2 0 0114 7v3a1 1 0 001 1h1a1 1 0 011 1v.34a1 1 0 002 0V12a3 3 0 00-3-3V7a4 4 0 00-1.17-2.83 4.06 4.06 0 00-5.19-.39 1 1 0 101.2 1.6zm10.87 14.91l-18-18a1 1 0 00-1.42 1.42L7.62 9A3 3 0 005 12v6a3 3 0 003 3h8a3 3 0 002.39-1.2l1.9 1.91a1 1 0 001.42 0 1 1 0 000-1.42zM16 19H8a1 1 0 01-1-1v-6a1 1 0 011-1h1.59l2.07 2.07A1 1 0 0011 14v2a1 1 0 002 0v-1.59l3.93 3.93A1 1 0 0116 19z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLockSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
