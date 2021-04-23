import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAlign(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 15h10a1 1 0 000-2H3a1 1 0 000 2zm0-4h10a1 1 0 000-2H3a1 1 0 000 2zm0-4h18a1 1 0 000-2H3a1 1 0 000 2zm18 10H3a1 1 0 000 2h18a1 1 0 000-2zm-1.36-7.43a1 1 0 10-1.28 1.53l1.08.9-1.08.9a1 1 0 00-.13 1.41 1 1 0 00.77.36 1 1 0 00.64-.24l2-1.66a1 1 0 000-1.54z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAlign);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
