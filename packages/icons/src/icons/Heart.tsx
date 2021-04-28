import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHeart(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.16 5A6.29 6.29 0 0012 4.36a6.27 6.27 0 00-8.16 9.48l6.21 6.22a2.78 2.78 0 003.9 0l6.21-6.22a6.27 6.27 0 000-8.84zm-1.41 7.46l-6.21 6.21a.76.76 0 01-1.08 0l-6.21-6.24a4.29 4.29 0 010-6 4.27 4.27 0 016 0 1 1 0 001.42 0 4.27 4.27 0 016 0 4.29 4.29 0 01.08 6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeart);
export default ForwardRef;
