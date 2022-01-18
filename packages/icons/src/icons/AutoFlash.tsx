import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgAutoFlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.87 8.6A1 1 0 0017 8h-4.58l1.27-4.74a1 1 0 00-.17-.87 1 1 0 00-.8-.39h-7a1 1 0 00-1 .74l-2.68 10a1 1 0 001 1.26h3.85l-1.81 6.74a1 1 0 001.71.93l10.9-12a1 1 0 00.18-1.07zm-9.79 8.68l1.08-4a1 1 0 00-.16-.89 1 1 0 00-.81-.39H4.35l2.14-8h4.93l-1.27 4.74a1 1 0 001 1.26h3.57zM19 13h-1a3 3 0 00-3 3v5a1 1 0 002 0v-2h3v2a1 1 0 002 0v-5a3 3 0 00-3-3zm1 4h-3v-1a1 1 0 011-1h1a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAutoFlash);
export default ForwardRef;
