import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMapMarkerSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.63 5.49a6 6 0 017.21 7.2 1 1 0 00.74 1.21.9.9 0 00.23 0 1 1 0 001-.76 8 8 0 00-9.61-9.62 1 1 0 00.46 2zm11.08 14.58l-4.27-4.27L3.71 2.07a1 1 0 00-1.42 0 1 1 0 000 1.41L5.5 6.69A8 8 0 006.34 17l4.95 4.95a1 1 0 001.42 0l4-4 3.56 3.56a1 1 0 001.42-1.41zm-9.59-6.76a2 2 0 01-1.53-.57 2 2 0 01-.59-1.53zm-.12 6.5l-4.24-4.24a6 6 0 01-.82-7.44L8.41 9.6a4 4 0 00.76 4.55A4 4 0 0012 15.33a3.93 3.93 0 001.73-.41l1.58 1.58z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMapMarkerSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;