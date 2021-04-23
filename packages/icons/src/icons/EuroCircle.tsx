import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEuroCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 1a11 11 0 1011 11A11 11 0 0012 1zm0 20a9 9 0 119-9 9 9 0 01-9 9zm.59-13.33a3.34 3.34 0 012.62 1.38 1 1 0 001.4.19 1 1 0 00.18-1.41 5.32 5.32 0 00-4.2-2.16A5.57 5.57 0 007.46 9.5H6a1 1 0 000 2h1v1H6a1 1 0 000 2h1.46a5.57 5.57 0 005.13 3.83 5.32 5.32 0 004.2-2.16A1 1 0 1015.21 15a3.34 3.34 0 01-2.62 1.38 3.42 3.42 0 01-2.92-1.88H12a1 1 0 000-2H9.05A4.23 4.23 0 019 12a4.23 4.23 0 01.05-.5H12a1 1 0 000-2H9.67a3.42 3.42 0 012.92-1.83z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEuroCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;