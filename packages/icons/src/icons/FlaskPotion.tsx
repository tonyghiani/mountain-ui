import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgFlaskPotion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.93 11.67a.42.42 0 000-.1A7.4 7.4 0 0015 7.62V4h1a1 1 0 000-2H8a1 1 0 000 2h1v3.62a7.4 7.4 0 00-3.89 4 .42.42 0 000 .1 7.5 7.5 0 1013.86 0zm-8.62-2.41a1 1 0 00.69-.95V4h2v4.31a1 1 0 00.69.95A5.43 5.43 0 0116.23 11H7.77a5.43 5.43 0 012.54-1.74zM12 20a5.51 5.51 0 01-5.5-5.5 5.34 5.34 0 01.22-1.5h10.56a5.34 5.34 0 01.22 1.5A5.51 5.51 0 0112 20zm2-4a1 1 0 101 1 1 1 0 00-1-1zm-4-1a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFlaskPotion);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
