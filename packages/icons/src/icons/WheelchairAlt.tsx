import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgWheelchairAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 16.18V16a3 3 0 00-2-2.82V7h1a1 1 0 000-2H7a3 3 0 00-3-3H3a1 1 0 000 2h1a1 1 0 011 1v7.42A5 5 0 1012 17a4.94 4.94 0 00-.42-2H17a1 1 0 011 1v.18a3 3 0 102 0zM7 20a3 3 0 113-3 3 3 0 01-3 3zm9-7h-6a4.93 4.93 0 00-3-1v-1h9zm0-4H7V7h9zm3 11a1 1 0 111-1 1 1 0 01-1 1zM7 16a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWheelchairAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
