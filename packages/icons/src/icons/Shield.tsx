import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShield(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.63 3.65a1 1 0 00-.84-.2 8 8 0 01-6.22-1.27 1 1 0 00-1.14 0 8 8 0 01-6.22 1.27 1 1 0 00-.84.2 1 1 0 00-.37.78v7.45a9 9 0 003.77 7.33l3.65 2.6a1 1 0 001.16 0l3.65-2.6A9 9 0 0020 11.88V4.43a1 1 0 00-.37-.78zM18 11.88a7 7 0 01-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 016 11.88v-6.3a10 10 0 006-1.39 10 10 0 006 1.39z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShield);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;