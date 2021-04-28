import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAirplay(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.83 13.45a1 1 0 00-1.66 0l-4 6a1 1 0 000 1A1 1 0 008 21h8a1 1 0 00.88-.53 1 1 0 00-.05-1zM9.87 19L12 15.8l2.13 3.2zM19 3H5a3 3 0 00-3 3v9a3 3 0 003 3h.85a1 1 0 100-2H5a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1v9a1 1 0 01-1 1h-.85a1 1 0 000 2H19a3 3 0 003-3V6a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAirplay);
export default ForwardRef;
