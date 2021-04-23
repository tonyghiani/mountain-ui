import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTimesCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.71 8.29a1 1 0 00-1.42 0L12 10.59l-2.29-2.3a1 1 0 00-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l2.29-2.3 2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42L13.41 12l2.3-2.29a1 1 0 000-1.42zm3.36-3.36A10 10 0 104.93 19.07 10 10 0 1019.07 4.93zm-1.41 12.73A8 8 0 1120 12a7.95 7.95 0 01-2.34 5.66z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTimesCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;