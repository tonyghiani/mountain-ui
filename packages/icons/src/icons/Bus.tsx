import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.5 17a1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18l-.12-.15a1 1 0 00-.33-.21 1 1 0 00-.6-.08l-.18.06-.18.09a1.58 1.58 0 00-.15.12l-.12.15a.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 001 1zm8 0a1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18l-.12-.15a1.15 1.15 0 00-.33-.21 1 1 0 00-.76 0 1.15 1.15 0 00-.33.21l-.12.15a.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 00.29.7 1 1 0 00.67.3zm-3-12h-2a1 1 0 000 2h2a1 1 0 000-2zm5-3h-12a3 3 0 00-3 3v12a3 3 0 002 2.82V21a1 1 0 002 0v-1h10v1a1 1 0 002 0v-1.18a3 3 0 002-2.82V5a3 3 0 00-3-3zm1 15a1 1 0 01-1 1h-12a1 1 0 01-1-1v-3h14zm0-5h-14V5a1 1 0 011-1h12a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;