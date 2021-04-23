import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTablets(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.54 3.46a5 5 0 100 7.08 5 5 0 000-7.08zm-5.66 1.42A3 3 0 0117 4a3 3 0 011.28.3l-4 4a3 3 0 01.6-3.42zm4.24 4.24a3 3 0 01-3.4.58l4-4a3 3 0 01-.6 3.42zM8 10a5.93 5.93 0 00-4.21 1.73A6 6 0 008 22a6 6 0 004.14-1.66l.12-.08a1.05 1.05 0 01.07-.11A6 6 0 008 10zm-2.83 8.83A4 4 0 014.56 14L10 19.44a4 4 0 01-4.83-.61zm6.27-.83L6 12.56A4 4 0 018 12a4 4 0 013.44 6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTablets);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
