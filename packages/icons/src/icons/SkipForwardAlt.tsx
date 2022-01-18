import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgSkipForwardAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5 3a3 3 0 00-3 3v12a3 3 0 006 0V6a3 3 0 00-3-3zm1 15a1 1 0 01-2 0V6a1 1 0 012 0zm14.68-8.35L14 5.66a2.6 2.6 0 00-2.64 0A2.74 2.74 0 0010 8v8a2.74 2.74 0 001.37 2.38 2.57 2.57 0 002.64 0l6.67-4a2.75 2.75 0 000-4.7zm-1 3l-6.66 4a.61.61 0 01-.63 0A.72.72 0 0112 16V8a.72.72 0 01.36-.64.64.64 0 01.31-.08.63.63 0 01.32.09l6.66 4a.76.76 0 010 1.28z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSkipForwardAlt);
export default ForwardRef;
