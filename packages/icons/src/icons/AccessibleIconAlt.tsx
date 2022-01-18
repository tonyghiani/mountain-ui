import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgAccessibleIconAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 7a2 2 0 10-2-2 2 2 0 002 2zm-3.3 11.4A4 4 0 119.05 12a1 1 0 10-.22-2 6 6 0 00.67 12 6 6 0 004.8-2.4 1 1 0 00-1.6-1.2zm6.8 1.6h-1v-5a1 1 0 00-1-1h-4.57l1.69-4.66v-.31a1.1 1.1 0 000-.18 1.06 1.06 0 000-.19 1.4 1.4 0 00-.09-.17.72.72 0 00-.11-.15.64.64 0 00-.15-.13s0-.06-.08-.08L9.71 5.55h-.12a1.06 1.06 0 00-.19-.06H9a.8.8 0 00-.2.07h-.11L6 7.13A1 1 0 006.48 9 1 1 0 007 8.87l2.23-1.3 3.24 1.88-1.89 5.21a.88.88 0 000 .16.58.58 0 000 .18 3 3 0 00.08.38l.11.15a.57.57 0 00.11.16.67.67 0 00.14.09 1.22 1.22 0 00.19.12 1 1 0 00.34.06h5v5a1 1 0 001 1h2a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAccessibleIconAlt);
export default ForwardRef;
