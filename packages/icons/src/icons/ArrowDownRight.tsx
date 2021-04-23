import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowDownRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 6a1 1 0 00-1 1v7.59l-8.29-8.3a1 1 0 00-1.42 1.42l8.3 8.29H7a1 1 0 000 2h10a1 1 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0018 17V7a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowDownRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;