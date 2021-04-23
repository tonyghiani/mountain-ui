import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPoundCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 15h-5.18a3 3 0 00.18-1v-1h2.5a1 1 0 000-2H11v-1a1.95 1.95 0 013.63-1 1 1 0 001.74-1A4 4 0 009 10v1H8a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 000 2h8a1 1 0 000-2zM12 1a11 11 0 1011 11A11 11 0 0012 1zm0 20a9 9 0 119-9 9 9 0 01-9 9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPoundCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;