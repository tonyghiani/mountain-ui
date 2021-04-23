import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPresentation(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 14h-1V4h1a1 1 0 000-2H3a1 1 0 000 2h1v10H3a1 1 0 000 2h8v1.15l-4.55 3A1 1 0 007 22a.94.94 0 00.55-.17L11 19.55V21a1 1 0 002 0v-1.45l3.45 2.28A.94.94 0 0017 22a1 1 0 00.55-1.83l-4.55-3V16h8a1 1 0 000-2zm-3 0H6V4h12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPresentation);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
