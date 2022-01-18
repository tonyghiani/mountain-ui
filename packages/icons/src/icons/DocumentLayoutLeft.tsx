import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgDocumentLayoutLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 12h6a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h4v4H4zm9 2h8a1 1 0 000-2h-8a1 1 0 000 2zm0 10H3a1 1 0 000 2h10a1 1 0 000-2zm8-4H3a1 1 0 000 2h18a1 1 0 000-2zm0-4h-8a1 1 0 000 2h8a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDocumentLayoutLeft);
export default ForwardRef;
