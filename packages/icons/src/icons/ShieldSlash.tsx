import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShieldSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 20.29l-16-16-2-2a1 1 0 00-1.42 1.42L4 5.41v6.47a9 9 0 003.77 7.32l3.65 2.61a1 1 0 001.16 0l3.65-2.61a8.21 8.21 0 00.86-.7l3.2 3.21a1 1 0 001.42 0 1 1 0 000-1.42zm-6.64-2.71L12 19.77l-3.07-2.19A7 7 0 016 11.88V7.41l9.67 9.68c-.19.17-.39.33-.6.49zm-5-12.51A10.15 10.15 0 0012 4.19a9.82 9.82 0 006 1.39v6.3a6.88 6.88 0 01-.1 1.18 1 1 0 00.83 1.15h.16a1 1 0 001-.84 9.77 9.77 0 00.12-1.5V4.43a1 1 0 00-.37-.77 1 1 0 00-.83-.21 7.89 7.89 0 01-6.23-1.27 1 1 0 00-1.14 0 8 8 0 01-2 1 1 1 0 10.64 1.9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShieldSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;