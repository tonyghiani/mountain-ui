import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMegaphone(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.991 2.002a1 1 0 00-1 1v.637a9.036 9.036 0 01-7 3.363h-6a3.003 3.003 0 00-3 3v2a3.003 3.003 0 003 3h.484l-2.403 5.606a1 1 0 00.92 1.394h4a.999.999 0 00.918-.606l2.724-6.356a9.028 9.028 0 016.357 3.325v.637a1 1 0 002 0v-16a1 1 0 00-1-1zm-14 11a1 1 0 01-1-1v-2a1 1 0 011-1h1v4zm2.341 7H6.508l2.142-5h1.825zm10.66-4.478a11.052 11.052 0 00-7-2.522h-3v-4h3a11.053 11.053 0 007-2.522z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMegaphone);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;