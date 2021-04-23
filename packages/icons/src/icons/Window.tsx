import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgWindow(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 5a1 1 0 101 1 1 1 0 00-1-1zM6 5a1 1 0 101 1 1 1 0 00-1-1zm8 0a1 1 0 101 1 1 1 0 00-1-1zm6-4H4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3zm1 19a1 1 0 01-1 1H4a1 1 0 01-1-1v-9h18zm0-11H3V4a1 1 0 011-1h16a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWindow);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
