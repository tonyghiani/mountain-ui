import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSelfie(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 2H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10zm-5-5a3 3 0 012.82 2H9.18A3 3 0 0112 14zm-1-3a1 1 0 111 1 1 1 0 01-1-1zm6 5h-.1a5 5 0 00-2.42-3.32A3 3 0 0015 11a3 3 0 00-6 0 3 3 0 00.52 1.68A5 5 0 007.1 16H7V5a1 1 0 011-1h8a1 1 0 011 1zM12 5a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSelfie);
export default ForwardRef;
