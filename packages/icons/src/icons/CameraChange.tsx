import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCameraChange(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.29 5.21l1.5 1.5a1 1 0 001.42 0 1 1 0 00.13-1.21H19a1 1 0 000-2h-3.66a1 1 0 00-.13-1.21 1 1 0 00-1.42 0l-1.5 1.5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33zm10.63 3.91a1 1 0 00-.21-.33l-1.5-1.5a1 1 0 00-1.42 0 1 1 0 00-.13 1.21H16a1 1 0 000 2h3.66a1 1 0 00.13 1.21 1 1 0 001.42 0l1.5-1.5a1 1 0 00.21-.33 1 1 0 000-.76zM11 10a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2zm9-3a1 1 0 00-1 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h2a1 1 0 001-.69l.54-1.62a1 1 0 01.9-.69H10a1 1 0 000-2H8.44a3 3 0 00-2.85 2.06L5.28 8H4a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-5a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCameraChange);
export default ForwardRef;
