import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWaterDropSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 20.29l-18-18a1 1 0 00-1.42 1.42l4 4a12.46 12.46 0 00-2 6.57A7.76 7.76 0 0012 22a7.64 7.64 0 005.87-2.71l2.42 2.42a1 1 0 001.42 0 1 1 0 000-1.42zM12 20a5.76 5.76 0 01-5.75-5.75 10.3 10.3 0 011.47-5.11l8.74 8.73A5.67 5.67 0 0112 20zM10.85 5.24c.45-.42.85-.75 1.15-1 1.43 1.12 5.13 4.43 5.68 8.88a1 1 0 001 .88h.12a1 1 0 00.87-1.11c-.78-6.43-6.85-10.55-7.1-10.72a1 1 0 00-1.12 0 18.73 18.73 0 00-1.96 1.61 1 1 0 001.36 1.46z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWaterDropSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;