import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLamp(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 2.78A1 1 0 0017 2H7a1 1 0 00-1 .78l-2 9a1 1 0 00.2.85A1 1 0 005 13h3.94A8.26 8.26 0 019 14a8.92 8.92 0 01-2.57 6.3 1 1 0 00.71 1.7h9.72a1 1 0 00.71-1.7A8.92 8.92 0 0115 14a8.26 8.26 0 01.06-1H16v2a1 1 0 002 0v-2h1a1 1 0 00.78-.37 1 1 0 00.2-.85zM9.22 20A10.9 10.9 0 0011 14c0-.33 0-.67-.05-1h2.1c0 .33-.05.67-.05 1a10.9 10.9 0 001.78 6zm-3-9L7.8 4h8.4l1.55 7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLamp);
export default ForwardRef;
