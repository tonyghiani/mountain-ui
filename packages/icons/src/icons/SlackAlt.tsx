import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSlackAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M23 9.5A3.504 3.504 0 0019.5 6a3.46 3.46 0 00-1.5.351V4.5a3.495 3.495 0 00-6-2.442A3.487 3.487 0 006.351 6H4.5a3.495 3.495 0 00-2.442 6A3.487 3.487 0 006 17.649V19.5a3.495 3.495 0 006 2.442A3.487 3.487 0 0017.649 18H19.5a3.495 3.495 0 002.442-6A3.486 3.486 0 0023 9.5zm-10-5a1.5 1.5 0 013 0v5a1.5 1.5 0 01-3 0zm-7 10A1.5 1.5 0 114.5 13H6zm5 5a1.5 1.5 0 01-3 0v-5a1.5 1.5 0 013 0zM9.5 11h-5a1.5 1.5 0 010-3h5a1.5 1.5 0 010 3zM11 6H9.5A1.5 1.5 0 1111 4.5zm1 6.058a3.725 3.725 0 00-.058-.058l.058-.058.058.058-.058.058zM14.5 21a1.502 1.502 0 01-1.5-1.5V18h1.5a1.5 1.5 0 010 3zm5-5h-5a1.5 1.5 0 010-3h5a1.5 1.5 0 010 3zm0-5H18V9.5a1.5 1.5 0 111.5 1.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSlackAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;