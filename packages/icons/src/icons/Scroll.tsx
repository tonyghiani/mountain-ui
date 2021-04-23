import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgScroll(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 9.71a1 1 0 001.42 0l5-5a1 1 0 10-1.42-1.42L12 7.59l-4.29-4.3a1 1 0 00-1.42 1.42zm1.42 4.58a1 1 0 00-1.42 0l-5 5a1 1 0 001.42 1.42l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgScroll);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
