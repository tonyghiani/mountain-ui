import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTumblrSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2 2v20h20V2zm11.57 15.85a3.4 3.4 0 01-3.75-3.33v-4.08H8.56V8.83A3.83 3.83 0 0011 5.47a.09.09 0 01.09-.09h1.82v3.17h2.5v1.89h-2.49v3.89a1.11 1.11 0 001.2 1.23 3 3 0 001-.22l.6 1.78a3.34 3.34 0 01-2.15.73z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTumblrSquare);
export default ForwardRef;
