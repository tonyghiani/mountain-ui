import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgScrollH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M4.71 6.29a1 1 0 00-1.42 1.42L7.59 12l-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l5-5a1 1 0 000-1.42zM16.41 12l4.3-4.29a1 1 0 10-1.42-1.42l-5 5a1 1 0 000 1.42l5 5a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgScrollH);
export default ForwardRef;
