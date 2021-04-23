import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltBlock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6h-4a1 1 0 000 2h4a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-1a1 1 0 00-2 0v1a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 22a1.1 1.1 0 00.4-.08A1 1 0 0022 21V9a3 3 0 00-3-3zm-8.46 4.54A5 5 0 107 12a5 5 0 003.54-1.46zM4 7a3 3 0 013-3 3 3 0 011.28.3l-4 4A3 3 0 014 7zm5.7-1.29A3 3 0 0110 7a3 3 0 01-4.28 2.7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltBlock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
