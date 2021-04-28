import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLocationPoint(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 4.48a8.45 8.45 0 00-12 12l5.27 5.28a1 1 0 001.42 0L18 16.43a8.45 8.45 0 000-11.95zM16.57 15L12 19.59 7.43 15a6.46 6.46 0 119.14 0zM9 7.41a4.32 4.32 0 000 6.1 4.31 4.31 0 007.36-3 4.24 4.24 0 00-1.26-3.05A4.3 4.3 0 009 7.41zm4.69 4.68a2.33 2.33 0 11.67-1.63 2.33 2.33 0 01-.72 1.63z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLocationPoint);
export default ForwardRef;
