import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgModem(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.48 13.13a.65.65 0 00-.05-.2.89.89 0 00-.08-.17.86.86 0 00-.1-.16l-.16-.13-.09-.09-14.72-8.5a1 1 0 00-1 1.74l11.49 6.63H3.5a1 1 0 00-1 1v4a3 3 0 003 3h13a3 3 0 003-3v-4s-.02-.08-.02-.12zm-2 4.12a1 1 0 01-1 1H5.5a1 1 0 01-1-1v-3h15zm-3 0a1 1 0 10-1-1 1 1 0 001.02 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgModem);
export default ForwardRef;
