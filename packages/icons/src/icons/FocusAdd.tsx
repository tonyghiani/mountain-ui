import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFocusAdd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 20H5a1 1 0 01-1-1v-3a1 1 0 00-2 0v3a3 3 0 003 3h3a1 1 0 000-2zM3 9a1 1 0 001-1V5a1 1 0 011-1h3a1 1 0 000-2H5a3 3 0 00-3 3v3a1 1 0 001 1zm16-7h-3a1 1 0 000 2h3a1 1 0 011 1v3a1 1 0 002 0V5a3 3 0 00-3-3zm-3 10a1 1 0 00-1-1h-2V9a1 1 0 00-2 0v2H9a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 001-1zm5 3a1 1 0 00-1 1v3a1 1 0 01-1 1h-3a1 1 0 000 2h3a3 3 0 003-3v-3a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFocusAdd);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
