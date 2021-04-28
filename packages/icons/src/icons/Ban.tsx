import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBan(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 01-8-8 7.92 7.92 0 011.69-4.9L16.9 18.31A7.92 7.92 0 0112 20zm6.31-3.1L7.1 5.69A7.92 7.92 0 0112 4a8 8 0 018 8 7.92 7.92 0 01-1.69 4.9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBan);
export default ForwardRef;
