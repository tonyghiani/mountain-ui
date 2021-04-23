import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHardHat(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 13.17V13a8 8 0 00-2.42-5.74 7.84 7.84 0 00-3.18-1.88h-.05A8.24 8.24 0 0011.76 5 8.21 8.21 0 004 13.17 3 3 0 005 19h14a3 3 0 001-5.83zM19 17H5a1 1 0 010-2h2a1 1 0 000-2H6a6.41 6.41 0 013-5.15V11a1 1 0 002 0V7.09a7.34 7.34 0 01.82-.09H12a5.56 5.56 0 011 .1V11a1 1 0 002 0V7.82a6.65 6.65 0 011.18.87A6 6 0 0118 13h-1a1 1 0 000 2h2a1 1 0 010 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHardHat);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
