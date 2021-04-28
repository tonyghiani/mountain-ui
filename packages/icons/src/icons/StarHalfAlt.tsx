import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgStarHalfAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 9.67a1 1 0 00-.86-.67l-5.69-.83L12.9 3a1 1 0 00-1.8 0L8.55 8.16 2.86 9a1 1 0 00-.81.68 1 1 0 00.25 1l4.13 4-1 5.68a1 1 0 001.47 1.08l5.1-2.67 5.1 2.67a.93.93 0 00.46.12 1 1 0 00.59-.19 1 1 0 00.4-1l-1-5.68 4.13-4A1 1 0 0022 9.67zM11 17l-3.23 1.7.72-4.2a1 1 0 00-.29-.88l-3-3 4.21-.61a1 1 0 00.76-.55L11 7.73zm4.8-3.38a1 1 0 00-.29.88l.72 4.2L13 17V7.73l.88 1.79a1 1 0 00.76.55l4.21.61z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStarHalfAlt);
export default ForwardRef;
