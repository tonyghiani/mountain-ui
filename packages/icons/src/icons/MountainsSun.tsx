import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMountainsSun(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 10a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zm-1.15 8.47a1 1 0 00-1.7 0l-1 1.63-3.29-5.6a1 1 0 00-1.72 0l-7 12A1 1 0 003 22h18a1 1 0 00.85-1.53zM10.45 20H4.74L10 11l2.94 5-1.25 2zm2.35 0l1.49-2.37.71-1.06 1-1.68L19.2 20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMountainsSun);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;