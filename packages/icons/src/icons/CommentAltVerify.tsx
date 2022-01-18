import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCommentAltVerify(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.71 6.29l-5.3 5.3-2.12-2.12a1 1 0 10-1.41 1.41l2.83 2.83a1 1 0 00.7.29 1 1 0 00.71-.29l6-6a1 1 0 000-1.42 1 1 0 00-1.41 0zM19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h11.59l3.7 3.71A1 1 0 0021 22a.84.84 0 00.38-.08A1 1 0 0022 21V5a3 3 0 00-3-3zm1 16.59l-2.29-2.3A1 1 0 0017 16H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltVerify);
export default ForwardRef;
