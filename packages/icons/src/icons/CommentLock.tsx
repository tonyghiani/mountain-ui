import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentLock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.92 16.13a1 1 0 00-1.37.37A7 7 0 0111.5 20H5.91l.64-.63a1 1 0 000-1.41 7 7 0 014.07-11.91 1 1 0 10-.24-2 9 9 0 00-5.91 14.57l-1.68 1.67a1 1 0 00-.21 1.09 1 1 0 00.92.62h8a9 9 0 007.79-4.5 1 1 0 00-.37-1.37zm.58-9.95V5a3 3 0 00-6 0v1.18a3 3 0 00-2 2.82v2a3 3 0 003 3h4a3 3 0 003-3V9a3 3 0 00-2-2.82zM15.5 5a1 1 0 012 0v1h-2zm4 6a1 1 0 01-1 1h-4a1 1 0 01-1-1V9a1 1 0 011-1h4a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentLock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;