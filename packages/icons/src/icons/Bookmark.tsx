import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgBookmark(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 2H8a3 3 0 00-3 3v16a1 1 0 00.5.87 1 1 0 001 0l5.5-3.18 5.5 3.18a1 1 0 00.5.13 1 1 0 00.5-.13A1 1 0 0019 21V5a3 3 0 00-3-3zm1 17.27l-4.5-2.6a1 1 0 00-1 0L7 19.27V5a1 1 0 011-1h8a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBookmark);
export default ForwardRef;
