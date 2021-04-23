import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentShare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.06 13.51a1 1 0 00-1.11.87A7 7 0 0111 20.5H5.41l.64-.63a1 1 0 000-1.41 7 7 0 013.2-11.74 1 1 0 00-.5-1.94A9 9 0 004 19.12l-1.71 1.67a1 1 0 00-.21 1.09 1 1 0 00.92.62h8a9 9 0 008.93-7.88 1 1 0 00-.87-1.11zM19 7.5a2 2 0 00-1.18.39l-1.75-.8L18 6.21a2 2 0 001 .29 2 2 0 10-2-2l-1.9.87A2 2 0 0014 5a2 2 0 000 4 2 2 0 00.93-.24l2.09 1A2 2 0 1019 7.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentShare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
