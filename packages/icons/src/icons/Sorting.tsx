import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSorting(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 10.21a1 1 0 001.42 0l3-3a1 1 0 10-1.42-1.42L12 8.09l-2.29-2.3a1 1 0 00-1.42 1.42zm1.42 4.58a1 1 0 00-1.42 0l-3 3a1 1 0 001.42 1.42l2.29-2.3 2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSorting);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
