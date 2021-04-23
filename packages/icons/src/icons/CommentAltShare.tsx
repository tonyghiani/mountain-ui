import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltShare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.5 6.5h-5a1 1 0 000 2h5a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9.5a1 1 0 01-1-1v-2a1 1 0 00-2 0v2a3 3 0 003 3h8.36l3 2.73a1 1 0 00.68.27 1.1 1.1 0 00.4-.08 1 1 0 00.6-.92v-12a3 3 0 00-3.04-3zm-10 5a2 2 0 10-1.18-3.61l-1.75-.8 1.91-.88a2 2 0 001 .29 2 2 0 10-2-2l-1.9.87A2 2 0 004.5 5a2 2 0 000 4 2 2 0 00.93-.24l2.09 1A2 2 0 009.5 11.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltShare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
