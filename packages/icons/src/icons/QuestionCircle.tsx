import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgQuestionCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 15.29a1.58 1.58 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2.84.84 0 00.08.38.9.9 0 00.54.54.94.94 0 00.76 0 .9.9 0 00.54-.54A1 1 0 0013 16a1 1 0 00-.29-.71 1 1 0 00-1.42 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-13a3 3 0 00-2.6 1.5 1 1 0 101.73 1A1 1 0 0112 9a1 1 0 010 2 1 1 0 00-1 1v1a1 1 0 002 0v-.18A3 3 0 0012 7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgQuestionCircle);
export default ForwardRef;
