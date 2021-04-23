import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMouseAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 6a1 1 0 00-1 1v2a1 1 0 002 0V7a1 1 0 00-1-1zm0-4a7 7 0 00-7 7v6a7 7 0 0014 0V9a7 7 0 00-7-7zm5 13a5 5 0 01-10 0V9a5 5 0 0110 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMouseAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;