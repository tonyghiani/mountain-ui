import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHeartMedical(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 11h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2zm6.16-6A6.29 6.29 0 0012 4.41a6.27 6.27 0 00-8.16 9.48l6 6.05a3 3 0 004.24 0l6-6.05A6.27 6.27 0 0020.16 5zm-1.41 7.46l-6 6a1 1 0 01-1.42 0l-6-6a4.29 4.29 0 010-6 4.27 4.27 0 016 0 1 1 0 001.42 0 4.27 4.27 0 016 0 4.29 4.29 0 010 6.02z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeartMedical);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;