import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVerticalAlignBottom(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 20h-3V9a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H7a1 1 0 00-1 1v17H3a1 1 0 000 2h18a1 1 0 000-2zm-9 0H8V4h4zm4 0h-2V10h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVerticalAlignBottom);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
