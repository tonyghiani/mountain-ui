import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.29 10.3a1 1 0 001.09 1.63 1.19 1.19 0 00.33-.22 1 1 0 00.21-.32A.85.85 0 008 11a1 1 0 00-.29-.7 1 1 0 00-1.42 0zM7 5a1 1 0 010 2 1 1 0 000 2 3 3 0 10-2.6-4.5 1 1 0 00.37 1.37 1 1 0 001.36-.37A1 1 0 017 5zm12 1h-6a1 1 0 000 2h6a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-1a1 1 0 00-2 0v1a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 22a1.1 1.1 0 00.4-.08A1 1 0 0022 21V9a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltQuestion);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;