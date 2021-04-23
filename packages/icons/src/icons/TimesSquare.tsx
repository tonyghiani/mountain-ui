import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTimesSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.71 8.29a1 1 0 00-1.42 0L12 10.59l-2.29-2.3a1 1 0 00-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l2.29-2.3 2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42L13.41 12l2.3-2.29a1 1 0 000-1.42zM19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTimesSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;