import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPolygon(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.87 11.5l-4.5-7.79a1 1 0 00-.87-.5h-9a1 1 0 00-.87.5l-4.5 7.79a1 1 0 000 1l4.5 7.79a1 1 0 00.87.5h9a1 1 0 00.87-.5l4.5-7.79a1 1 0 000-1zm-6 7.29H8.08L4.15 12l3.93-6.79h7.84L19.85 12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPolygon);
export default ForwardRef;
