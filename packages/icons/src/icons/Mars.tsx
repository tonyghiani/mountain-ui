import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMars(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.42 4.12a1 1 0 00-.54-.54 1 1 0 00-.38-.08h-4a1 1 0 000 2h1.59l-2.4 2.4a7 7 0 101.41 1.41l2.4-2.4V8.5a1 1 0 002 0v-4a1 1 0 00-.08-.38zM14 17a5 5 0 110-7 5 5 0 010 7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMars);
export default ForwardRef;
