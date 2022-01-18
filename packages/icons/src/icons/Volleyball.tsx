import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgVolleyball(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.59 6.9a.86.86 0 00-.07-.1A10 10 0 007.6 3h-.07a10 10 0 00-1 17.19l.33.2.1.07A9.93 9.93 0 0012 22h.21a10 10 0 008.38-15.1zM19 8.06a7.64 7.64 0 01.65 1.46 10 10 0 00-3-.49.81.81 0 00-.31 0 9.78 9.78 0 00-3.58.73 7.85 7.85 0 01-1.84-1.6 8.16 8.16 0 018.08-.1zM12 4a7.86 7.86 0 014 1.07A7.77 7.77 0 0015 5a10 10 0 00-5.2 1.47 8 8 0 01-.64-1.94A7.92 7.92 0 0112 4zM6 6.71a8.26 8.26 0 011.33-1.19A9.9 9.9 0 0012 11.61a7.89 7.89 0 01-.77 2.88A8 8 0 016 7v-.29zM4 12a8.1 8.1 0 01.36-2.37 10 10 0 005.7 6.56 7.84 7.84 0 01-2.93 2.14A8 8 0 014 12zm7.86 8a7.8 7.8 0 01-2.61-.49 9.94 9.94 0 003.23-3.22A10 10 0 0014 11.41a7.71 7.71 0 011.78-.36A8 8 0 0111.86 20zm4.22-1.12A9.94 9.94 0 0018 13a10.69 10.69 0 00-.18-1.88 8.34 8.34 0 012.17.7V12a8 8 0 01-3.91 6.87z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVolleyball);
export default ForwardRef;
