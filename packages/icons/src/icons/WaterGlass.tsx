import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgWaterGlass(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.08 7a1 1 0 00-1.08.92l-.35 4.55a2.67 2.67 0 01-1.2-.77 1 1 0 00-1.5 0 2.65 2.65 0 01-3.9 0 1 1 0 00-1.5 0 2.7 2.7 0 01-1.2.77L7 7.92A1 1 0 005.92 7 1 1 0 005 8.08l.86 11.15a3 3 0 003 2.77h6.3a3 3 0 003-2.77L19 8.08A1 1 0 0018.08 7zm-1.94 12.08a1 1 0 01-1 .92H8.85a1 1 0 01-1-.92L7.5 14.5a4.77 4.77 0 001.8-.79 4.66 4.66 0 005.4 0 4.77 4.77 0 001.8.79zM12 10a3.26 3.26 0 003.25-3.25c0-2.75-2.58-4.51-2.69-4.58a1 1 0 00-1.12 0c-.11.08-2.69 1.83-2.69 4.58A3.26 3.26 0 0012 10zm0-5.7a3.61 3.61 0 011.25 2.45 1.25 1.25 0 01-2.5 0A3.66 3.66 0 0112 4.3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWaterGlass);
export default ForwardRef;
