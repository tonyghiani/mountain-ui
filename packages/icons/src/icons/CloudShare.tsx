import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudShare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.5 15a2 2 0 10-2-2l-1.9.87a2 2 0 00-1.1-.33 2 2 0 000 4 1.88 1.88 0 00.92-.24l2.1 1a2 2 0 10.8-1.84l-1.75-.8 1.91-.88a2 2 0 001.02.22zm3.92-7.78A7 7 0 005.06 9.11a4 4 0 00-.38 7.66 1.13 1.13 0 00.32.05 1 1 0 00.32-2A2 2 0 014 13a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1 1 0 101 1.74A5 5 0 0022 12a5 5 0 00-3.58-4.78z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudShare);
export default ForwardRef;
