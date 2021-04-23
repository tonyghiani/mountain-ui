import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgNewspaper(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 11h-1a1 1 0 000 2h1a1 1 0 000-2zm0 4h-1a1 1 0 000 2h1a1 1 0 000-2zm-6-6h6a1 1 0 000-2h-6a1 1 0 000 2zm10-6H7a1 1 0 00-1 1v3H3a1 1 0 00-1 1v10a3 3 0 003 3h13a4 4 0 004-4V4a1 1 0 00-1-1zM6 18a1 1 0 01-2 0V9h2zm14-1a2 2 0 01-2 2H7.82A3 3 0 008 18V5h12zm-9-4h1a1 1 0 000-2h-1a1 1 0 000 2zm0 4h1a1 1 0 000-2h-1a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgNewspaper);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
