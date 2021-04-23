import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltLock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 10V8a3 3 0 00-2-2.82V4a3 3 0 00-6 0v1.18A3 3 0 002 8v2a3 3 0 003 3h4a3 3 0 003-3zM6 4a1 1 0 012 0v1H6zm-2 6V8a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1zm15-3h-4a1 1 0 000 2h4a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-1a1 1 0 00-2 0v1a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 23a1.1 1.1 0 00.4-.08A1 1 0 0022 22V10a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltLock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;