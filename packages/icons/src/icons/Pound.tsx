import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPound(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 20H8a4.92 4.92 0 001-3v-3h6a1 1 0 000-2H9V8.89a4.89 4.89 0 019.13-2.44 1 1 0 001.37.36 1 1 0 00.37-1.36A6.9 6.9 0 007 8.89V12H4a1 1 0 000 2h3v3a3 3 0 01-3 3 1 1 0 000 2h16a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPound);
export default ForwardRef;
