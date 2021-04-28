import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHdd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 14.86v-.05a2.61 2.61 0 00-.1-.57l-1.64-9.73a3 3 0 00-3-2.51H6.69a3 3 0 00-2.95 2.51l-1.62 9.71a2.61 2.61 0 00-.1.57v.05C2 14.91 2 15 2 15v4a3 3 0 003 3h14a3 3 0 003-3v-4-.14zM5.71 4.83a1 1 0 011-.83h10.6a1 1 0 011 .83l1.2 7.22A2.63 2.63 0 0019 12H5a2.63 2.63 0 00-.49.05zM20 19a1 1 0 01-1 1H5a1 1 0 01-1-1v-3.92l.08-.46A1 1 0 015 14h14a1 1 0 01.92.62l.08.46zm-3-3a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHdd);
export default ForwardRef;
