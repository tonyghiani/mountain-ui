import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPlaneFly(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M23 9.32a1.06 1.06 0 00-.1-.76 4.93 4.93 0 00-6.75-1.8L14 8 9 5.65a1 1 0 00-.92 0l-3 1.73a1 1 0 00-.5.84 1 1 0 00.46.87l3.3 2.08-1.74 1-4.78.58a1 1 0 00-.53 1.75l3.54 3.06a3 3 0 003.55.44L22.5 9.93a1 1 0 00.5-.61zm-15.53 7a1 1 0 01-1.2-.18l-1.9-1.63 2.73-.33a1 1 0 00.38-.13l3.36-1.93a1 1 0 00.5-.85 1 1 0 00-.47-.86l-3.3-2.09 1.1-.63 5 2.32a1 1 0 00.92 0l2.56-1.48a3 3 0 013.36.29z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPlaneFly);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;