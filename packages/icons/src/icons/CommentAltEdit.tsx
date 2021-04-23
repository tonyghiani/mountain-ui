import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltEdit(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.5 5.5h-4a1 1 0 000 2h4a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H8.5a1 1 0 01-1-1v-1a1 1 0 00-2 0v1a3 3 0 003 3h8.36l3 2.73a1 1 0 00.68.27 1.1 1.1 0 00.4-.08 1 1 0 00.6-.92v-12a3 3 0 00-3.04-3zm-9.42 7h2.42a1 1 0 001-1V9.08a1 1 0 00-.29-.71L6.63 2.79a1 1 0 00-1.41 0L2.79 5.22a1 1 0 000 1.41l5.58 5.58a1 1 0 00.71.29zM5.92 4.91l4.58 4.58v1h-1L4.91 5.92z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltEdit);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;