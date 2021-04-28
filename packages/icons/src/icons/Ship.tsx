import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShip(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3.62 17.28a1 1 0 001.86-.74l-1.12-2.82L11 12.25V17a1 1 0 002 0v-4.75l6.64 1.47-1.12 2.82a1 1 0 00.56 1.3 1 1 0 00.37.07 1 1 0 00.93-.63l1.55-3.91a1 1 0 00-.05-.84 1 1 0 00-.66-.51L18 11.31V7a1 1 0 00-1-1h-2V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v3H7a1 1 0 00-1 1v4.31L2.78 12a1 1 0 00-.66.51 1 1 0 00-.05.84zM11 4h2v2h-2zM8 8h8v2.86L12.22 10H11.78L8 10.86zm12.71 11.28a4.38 4.38 0 00-1 .45 2.08 2.08 0 01-2.1 0 4.62 4.62 0 00-4.54 0 2.14 2.14 0 01-2.12 0 4.64 4.64 0 00-4.54 0 2.08 2.08 0 01-2.1 0 4.38 4.38 0 00-1-.45A1 1 0 002 20a1 1 0 00.67 1.24 2.1 2.1 0 01.57.25 4 4 0 002 .55 4.14 4.14 0 002.08-.56 2.65 2.65 0 012.56 0 4.15 4.15 0 004.12 0 2.65 2.65 0 012.56 0 4 4 0 004.1 0 2.1 2.1 0 01.57-.25A1 1 0 0022 20a1 1 0 00-1.29-.72z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShip);
export default ForwardRef;
