import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgRulerCombined(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h6a1 1 0 001-1V10h11a1 1 0 001-1V3a1 1 0 00-1-1zm-1 6h-2V7a1 1 0 00-2 0v1h-2V7a1 1 0 00-2 0v1h-2V7a1 1 0 00-2 0v1H7a1 1 0 000 2h1v2H7a1 1 0 000 2h1v2H7a1 1 0 000 2h1v2H4V4h16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRulerCombined);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
