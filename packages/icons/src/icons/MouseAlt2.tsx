import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMouseAlt2(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a7 7 0 00-7 7v6a7 7 0 0014 0V9a7 7 0 00-7-7zm5 13a5 5 0 01-10 0V9a5 5 0 014-4.9V12a1 1 0 002 0V4.1A5 5 0 0117 9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMouseAlt2);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
