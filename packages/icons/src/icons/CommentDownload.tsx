import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCommentDownload(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 14a1 1 0 00-1.22.72A7 7 0 0111 20H5.41l.64-.63a1 1 0 000-1.41A7 7 0 0111 6a8.49 8.49 0 01.88 0 1 1 0 10.24-2A8.32 8.32 0 0011 4a9 9 0 00-7 14.62l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 003 22h8a9 9 0 008.72-6.75A1 1 0 0019 14zm2.71-6.74a1 1 0 00-1.42 0L19 8.59V3a1 1 0 00-2 0v5.59l-1.29-1.3a1 1 0 10-1.42 1.42l3 3a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l3-3a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentDownload);
export default ForwardRef;
