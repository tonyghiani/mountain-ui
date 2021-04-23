import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltUpload(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5.5 11a1 1 0 002 0V5.41l1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42l-3-3a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-3 3a1 1 0 001.42 1.42l1.29-1.3zm13-5h-5a1 1 0 000 2h5a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H8.5a1 1 0 01-1-1v-1a1 1 0 00-2 0v1a3 3 0 003 3h8.36l3 2.73a1 1 0 00.68.27 1.1 1.1 0 00.4-.08 1 1 0 00.6-.92V9a3 3 0 00-3.04-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltUpload);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
