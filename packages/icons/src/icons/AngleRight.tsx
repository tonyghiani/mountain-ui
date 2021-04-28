import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAngleRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.83 11.29l-4.24-4.24a1 1 0 00-1.42 0 1 1 0 000 1.41L12.71 12l-3.54 3.54a1 1 0 000 1.41 1 1 0 00.71.29 1 1 0 00.71-.29l4.24-4.24a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAngleRight);
export default ForwardRef;
