import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgArchive(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 14h4a1 1 0 000-2h-4a1 1 0 000 2zm9-11H5a3 3 0 00-3 3v3a1 1 0 001 1h1v8a3 3 0 003 3h10a3 3 0 003-3v-8h1a1 1 0 001-1V6a3 3 0 00-3-3zm-1 15a1 1 0 01-1 1H7a1 1 0 01-1-1v-8h12zm2-10H4V6a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArchive);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
