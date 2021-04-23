import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPostcard(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 11h1a1 1 0 001-1V9a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1zM6 12h5a1 1 0 000-2H6a1 1 0 000 2zm16-8H2a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H3V6h18zM6 16h5a1 1 0 000-2H6a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPostcard);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
