import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgExposureIncrease(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 7h-1V6a1 1 0 00-2 0v1H7a1 1 0 000 2h1v1a1 1 0 002 0V9h1a1 1 0 000-2zm2 11h4a1 1 0 000-2h-4a1 1 0 000 2zm6-16H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zM4 18.59V5a1 1 0 011-1h13.59zM20 19a1 1 0 01-1 1H5.41L20 5.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgExposureIncrease);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;