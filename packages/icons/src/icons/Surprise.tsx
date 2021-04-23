import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgSurprise(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zM10 9a1 1 0 10-1 1 1 1 0 001-1zm5-1a1 1 0 101 1 1 1 0 00-1-1zm-3 3a3.39 3.39 0 00-3.25 3.5A3.39 3.39 0 0012 18a3.39 3.39 0 003.25-3.5A3.39 3.39 0 0012 11zm0 5a1.39 1.39 0 01-1.25-1.5A1.39 1.39 0 0112 13a1.39 1.39 0 011.25 1.5A1.39 1.39 0 0112 16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSurprise);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
