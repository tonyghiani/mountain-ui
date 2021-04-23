import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCheck(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.71 7.21a1 1 0 00-1.42 0l-7.45 7.46-3.13-3.14A1 1 0 105.29 13l3.84 3.84a1 1 0 001.42 0l8.16-8.16a1 1 0 000-1.47z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCheck);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
