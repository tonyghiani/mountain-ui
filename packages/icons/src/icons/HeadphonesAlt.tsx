import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgHeadphonesAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 13.18V11a8 8 0 00-16 0v2.18A3 3 0 002 16v2a3 3 0 003 3h3a1 1 0 001-1v-6a1 1 0 00-1-1H6v-2a6 6 0 0112 0v2h-2a1 1 0 00-1 1v6a1 1 0 001 1h3a3 3 0 003-3v-2a3 3 0 00-2-2.82zM7 15v4H5a1 1 0 01-1-1v-2a1 1 0 011-1zm13 3a1 1 0 01-1 1h-2v-4h2a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeadphonesAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
