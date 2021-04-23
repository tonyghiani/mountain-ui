import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPalette(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.42 15.54a1 1 0 000 1.41 1 1 0 001.42 0 1 1 0 000-1.41 1 1 0 00-1.42 0zm0-8.49a1 1 0 000 1.41 1 1 0 001.42 0 1 1 0 000-1.41 1 1 0 00-1.42 0zm4.95 10a1 1 0 101 1 1 1 0 00-1-1.05zm-6-6a1 1 0 101 1 1 1 0 00-1-1.05zm6-6a1 1 0 101 1 1 1 0 00-1-1.05zm3.54 2.05a1 1 0 101.41 0 1 1 0 00-1.41-.05zm6.3 0a11 11 0 10-7.85 15.74 3.87 3.87 0 002.5-1.65 4.2 4.2 0 00.61-3.19 5.65 5.65 0 01-.1-1 5 5 0 013-4.56 3.84 3.84 0 002.06-2.25 4 4 0 00-.22-3.11zm-1.7 2.44a1.9 1.9 0 01-1 1.09A7 7 0 0015.37 17a7.3 7.3 0 00.14 1.4 2.16 2.16 0 01-.31 1.65 1.79 1.79 0 01-1.21.8 8.72 8.72 0 01-1.62.15 9 9 0 01-9-9.28A9.05 9.05 0 0111.85 3h.51a9 9 0 018.06 5 2 2 0 01.09 1.52zM12.37 11a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPalette);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;