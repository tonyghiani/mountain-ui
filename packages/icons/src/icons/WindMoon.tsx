import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWindMoon(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 19H7a1 1 0 000 2h5a1.013 1.013 0 011 1 1 1 0 002 0 3.003 3.003 0 00-3-3zm2-10a1 1 0 10-1-1 1 1 0 001 1zm4 0h2a3.003 3.003 0 003-3 1 1 0 00-2 0 1.013 1.013 0 01-1 1h-2a1 1 0 000 2zm2 6h-2.161a8.043 8.043 0 001.146-2.95 1 1 0 00-1.305-1.117 5.97 5.97 0 01-1.92.317A6.062 6.062 0 019.7 5.2a7.155 7.155 0 01.098-1.049A1 1 0 008.49 3.053 8.032 8.032 0 004.266 15H3a1 1 0 000 2h5a1 1 0 000-2H6.83a6.028 6.028 0 01.882-9.36 8.065 8.065 0 008.048 7.61 7.878 7.878 0 00.789-.04A6.027 6.027 0 0115.277 15H12a1 1 0 000 2h8a1 1 0 010 2 1 1 0 000 2 3 3 0 000-6zM2.62 19.08a1.147 1.147 0 00-.33.21A1.028 1.028 0 002 20a.99.99 0 001.38.92 1.16 1.16 0 00.33-.21A.993.993 0 004 20a1.052 1.052 0 00-.29-.71 1.002 1.002 0 00-1.09-.21z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWindMoon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;