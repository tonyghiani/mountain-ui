import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgRssInterface(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 14a1 1 0 000 2 3 3 0 013 3 1 1 0 002 0 5 5 0 00-5-5zm-.71 4.29a1 1 0 101.42 0 1 1 0 00-1.42 0zM19 4H5a3 3 0 00-3 3 1 1 0 002 0 1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 000 2h4a3 3 0 003-3V7a3 3 0 00-3-3zM3 10a1 1 0 000 2 7 7 0 017 7 1 1 0 002 0 9 9 0 00-9-9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRssInterface);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;