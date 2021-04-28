import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDocumentLayoutRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13 18H3a1 1 0 000 2h10a1 1 0 000-2zM3 8h8a1 1 0 000-2H3a1 1 0 000 2zm0 4h8a1 1 0 000-2H3a1 1 0 000 2zm18 2H3a1 1 0 000 2h18a1 1 0 000-2zm0-10h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1zm-1 6h-4V6h4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDocumentLayoutRight);
export default ForwardRef;
