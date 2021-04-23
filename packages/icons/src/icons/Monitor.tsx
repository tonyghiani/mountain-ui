import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMonitor(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h2.64l-.58 1a2 2 0 000 2 2 2 0 001.75 1h6.46A2 2 0 0017 21a2 2 0 000-2l-.59-1H19a3 3 0 003-3V5a3 3 0 00-3-3zM8.77 20L10 18h4l1.2 2zM20 15a1 1 0 01-1 1H5a1 1 0 01-1-1v-1h16zm0-3H4V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMonitor);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
