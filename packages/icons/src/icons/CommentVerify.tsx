import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCommentVerify(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.29 8.85l-4.73 4.74-1.85-1.86a1 1 0 00-1.42 1.42l2.56 2.56a1 1 0 001.42 0l5.44-5.44a1 1 0 10-1.42-1.42zM12 2A10 10 0 002 12a9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 000-20zm0 18H5.41l.93-.93a1 1 0 000-1.41A8 8 0 1112 20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentVerify);
export default ForwardRef;
