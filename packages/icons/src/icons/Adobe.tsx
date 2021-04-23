import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAdobe(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.07 17.28h2.78l1.75 3.44h2.54L12 9.87zM2 3v18L9.42 3zm12.48 0L22 20.81V3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAdobe);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
