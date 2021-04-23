import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSad(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.36 15.33a1 1 0 00-.13 1.4 1 1 0 001.41.13 3.76 3.76 0 014.72 0 1 1 0 00.64.23 1 1 0 00.64-1.76 5.81 5.81 0 00-7.28 0zm.85-4.79a1 1 0 001.41 0 1 1 0 000-1.41 3.08 3.08 0 00-4.24 0 1 1 0 101.41 1.41 1 1 0 011.42 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm5.62-10.87a3.08 3.08 0 00-4.24 0 1 1 0 001.41 1.41 1 1 0 011.42 0 1 1 0 001.41 0 1 1 0 000-1.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSad);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;