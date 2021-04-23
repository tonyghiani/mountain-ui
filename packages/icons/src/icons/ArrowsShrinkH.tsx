import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgArrowsShrinkH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.71 11.29l-2.5-2.5a1 1 0 00-1.42 1.42l.8.79H9.41l.8-.79a1 1 0 00-1.42-1.42l-2.5 2.5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l2.5 2.5a1 1 0 001.42 0 1 1 0 000-1.42l-.8-.79h5.18l-.8.79a1 1 0 000 1.42 1 1 0 001.42 0l2.5-2.5a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33zM3 6a1 1 0 00-1 1v10a1 1 0 002 0V7a1 1 0 00-1-1zm18 0a1 1 0 00-1 1v10a1 1 0 002 0V7a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowsShrinkH);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
