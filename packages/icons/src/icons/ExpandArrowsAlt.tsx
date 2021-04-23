import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgExpandArrowsAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.29 13.29L4 18.59V17a1 1 0 00-2 0v4a1 1 0 00.08.38 1 1 0 00.54.54A1 1 0 003 22h4a1 1 0 000-2H5.41l5.3-5.29a1 1 0 00-1.42-1.42zM5.41 4H7a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v4a1 1 0 002 0V5.41l5.29 5.3a1 1 0 001.42 0 1 1 0 000-1.42zM21 16a1 1 0 00-1 1v1.59l-5.29-5.3a1 1 0 00-1.42 1.42l5.3 5.29H17a1 1 0 000 2h4a1 1 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0022 21v-4a1 1 0 00-1-1zm.92-13.38a1 1 0 00-.54-.54A1 1 0 0021 2h-4a1 1 0 000 2h1.59l-5.3 5.29a1 1 0 000 1.42 1 1 0 001.42 0L20 5.41V7a1 1 0 002 0V3a1 1 0 00-.08-.38z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgExpandArrowsAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;