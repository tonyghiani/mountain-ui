import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCopyright(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M11 9h2a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-2a3 3 0 00-3 3v4a3 3 0 003 3h2a3 3 0 003-3 1 1 0 00-2 0 1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1zm1-7a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCopyright);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
