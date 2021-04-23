import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowCircleRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.71 12.71a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-3-3a1 1 0 00-1.42 1.42l1.3 1.29H9a1 1 0 000 2h3.59l-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0zM22 12a10 10 0 10-10 10 10 10 0 0010-10zM4 12a8 8 0 118 8 8 8 0 01-8-8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowCircleRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;