import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDropbox(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.61 11.81l-3.25-2.53 3.26-2.56a1 1 0 00.38-.86 1.06 1.06 0 00-.5-.8l-5.14-2.93a1 1 0 00-1.15.12L12 5.05l-3.21-2.8a1 1 0 00-1.15-.12L2.5 5.06a1.06 1.06 0 00-.5.8 1 1 0 00.38.86l3.26 2.56-3.25 2.49a1 1 0 00-.39.86 1 1 0 00.5.8l3.41 2v2.47a1 1 0 00.48.85l5.09 3.13a1 1 0 001 0l5.09-3.13a1 1 0 00.48-.85v-2.48l3.41-1.95a1 1 0 00.5-.8 1 1 0 00-.35-.86zM16 4.22l3.23 1.84-2.55 2-3-1.84zm-1.09 5.12l-2.91 2-2.91-2L12 7.55zM4.79 6.06L8 4.22l2.31 2-3 1.84zm0 6.39l2.5-1.92 3 2.08-2.22 1.73zm11.29 4.86L12 19.83l-4.09-2.52v-.8a1 1 0 00.85-.18l3.24-2.5 3.24 2.5a1 1 0 00.61.21 1 1 0 00.24 0zm-.15-3l-2.23-1.7 3-2.08 2.51 1.94z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDropbox);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;