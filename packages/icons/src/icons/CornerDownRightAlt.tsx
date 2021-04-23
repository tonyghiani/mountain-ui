import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCornerDownRightAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.92 12.62a1 1 0 00-.21-.33l-3-3a1 1 0 00-1.42 1.42l1.3 1.29H8a1 1 0 01-1-1V7a1 1 0 00-2 0v4a3 3 0 003 3h9.59l-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l3-3a1 1 0 00.21-.33 1 1 0 000-.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCornerDownRightAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
