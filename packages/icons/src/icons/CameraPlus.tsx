import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCameraPlus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 10.5a1 1 0 00-1 1v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h2a1 1 0 001-.68l.54-1.64a1 1 0 01.95-.68H14a1 1 0 000-2H8.44A3 3 0 005.6 6.55l-.32 1H4a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-7a1 1 0 00-1-1.05zm-9-1a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2zm11-11h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCameraPlus);
export default ForwardRef;
