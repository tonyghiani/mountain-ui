import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBrowser(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H9a3 3 0 00-3 3v1H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3v-1h1a3 3 0 003-3V5a3 3 0 00-3-3zm-3 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h12zm0-9H4V9a1 1 0 011-1h10a1 1 0 011 1zm4 5a1 1 0 01-1 1h-1V9a3 3 0 00-.18-1H20zm0-9H8V5a1 1 0 011-1h10a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBrowser);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
