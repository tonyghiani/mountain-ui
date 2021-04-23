import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.92 11.62a1 1 0 00-.21-.33l-5-5a1 1 0 00-1.42 1.42l3.3 3.29H7a1 1 0 000 2h7.59l-3.3 3.29a1 1 0 000 1.42 1 1 0 001.42 0l5-5a1 1 0 00.21-.33 1 1 0 000-.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
