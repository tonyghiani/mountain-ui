import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUsersAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.3 12.22A4.92 4.92 0 0014 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 001 19.5a1 1 0 002 0 6 6 0 0112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM9 11.5a3 3 0 113-3 3 3 0 01-3 3zm9.74.32A5 5 0 0015 3.5a1 1 0 000 2 3 3 0 013 3 3 3 0 01-1.5 2.59 1 1 0 00-.5.84 1 1 0 00.45.86l.39.26.13.07a7 7 0 014 6.38 1 1 0 002 0 9 9 0 00-4.23-7.68z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUsersAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
