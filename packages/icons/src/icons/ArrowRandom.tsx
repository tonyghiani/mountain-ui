import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgArrowRandom(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.7 10a1 1 0 001.41 0 1 1 0 000-1.41l-6.27-6.3a1 1 0 00-1.42 1.42zM21 14a1 1 0 00-1 1v3.59L15.44 14A1 1 0 0014 15.44L18.59 20H15a1 1 0 000 2h6a1 1 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0022 21v-6a1 1 0 00-1-1zm.92-11.38a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 000 2h3.59L2.29 20.29a1 1 0 000 1.42 1 1 0 001.42 0L20 5.41V9a1 1 0 002 0V3a1 1 0 00-.08-.38z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowRandom);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
