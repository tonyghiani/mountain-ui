import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentBlock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 14a1 1 0 00-1.22.72A7 7 0 0111 20H5.41l.64-.63a1 1 0 000-1.41 7 7 0 013.2-11.74 1 1 0 00-.5-1.94A9 9 0 004 18.62l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 003 22h8a9 9 0 008.72-6.75A1 1 0 0019 14zm1.54-10.54A5 5 0 1022 7a5 5 0 00-1.46-3.54zM14 7a3 3 0 013-3 3 3 0 011.29.3l-4 4A3 3 0 0114 7zm5.12 2.12a3.08 3.08 0 01-3.4.57l4-4A3 3 0 0120 7a3 3 0 01-.88 2.12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentBlock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;