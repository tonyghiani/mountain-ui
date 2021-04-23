import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgAlignAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 11H3a1 1 0 000 2h7a1 1 0 000-2zm0 8H3a1 1 0 000 2h7a1 1 0 000-2zm4-14h7a1 1 0 000-2h-7a1 1 0 000 2zm-4 2H3a1 1 0 000 2h7a1 1 0 000-2zm0 8H3a1 1 0 000 2h7a1 1 0 000-2zm0-12H7a1 1 0 000 2h3a1 1 0 000-2zm11 4h-7a1 1 0 000 2h7a1 1 0 000-2zm0 4h-7a1 1 0 000 2h7a1 1 0 000-2zm-4 8h-3a1 1 0 000 2h3a1 1 0 000-2zm4-4h-7a1 1 0 000 2h7a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAlignAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
