import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudHail(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 17a1 1 0 101 1 1 1 0 00-1-1zm-4-6a1 1 0 101 1 1 1 0 00-1-1zm4 2a1 1 0 101 1 1 1 0 00-1-1zm-4 6a1 1 0 101 1 1 1 0 00-1-1zm0-4a1 1 0 101 1 1 1 0 00-1-1zm8 0a1 1 0 101 1 1 1 0 00-1-1zm-4-6a1 1 0 101 1 1 1 0 00-1-1zm4 2a1 1 0 101 1 1 1 0 00-1-1zm2.42-4.78A7 7 0 005.06 8.11 4 4 0 002 12a4 4 0 001.34 3 1 1 0 101.32-1.5A2 2 0 014 12a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 11a2.91 2.91 0 01-.74 2 1 1 0 001.48 1.34 5 5 0 00-2.32-8.08zM16 19a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudHail);
export default ForwardRef;
