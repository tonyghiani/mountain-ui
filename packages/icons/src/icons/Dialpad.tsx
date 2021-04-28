import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDialpad(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 2.25H3a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4A.76.76 0 007.75 7V3A.76.76 0 007 2.25zm-.75 4h-2.5v-2.5h2.5zm14.75-4h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75V3a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5zm-6.25-4h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75V3a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5zM7 9.25H3a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75v-4A.76.76 0 007 9.25zm-.75 4h-2.5v-2.5h2.5zm7.75-4h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75v-4a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5zm7.75-4h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75v-4a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5zm-6.25 3h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75v-4a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDialpad);
export default ForwardRef;
