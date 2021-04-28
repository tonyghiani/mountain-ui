import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgNotes(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 14H8a1 1 0 000 2h8a1 1 0 000-2zm0-4h-6a1 1 0 000 2h6a1 1 0 000-2zm4-6h-3V3a1 1 0 00-2 0v1h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H4a1 1 0 00-1 1v14a3 3 0 003 3h12a3 3 0 003-3V5a1 1 0 00-1-1zm-1 15a1 1 0 01-1 1H6a1 1 0 01-1-1V6h2v1a1 1 0 002 0V6h2v1a1 1 0 002 0V6h2v1a1 1 0 002 0V6h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgNotes);
export default ForwardRef;
