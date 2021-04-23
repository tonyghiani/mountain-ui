import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBrightnessLow(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 11a1 1 0 101 1 1 1 0 00-1-1zm1.93 6.66a1 1 0 101.41 0 1 1 0 00-1.41 0zM6.34 6.34a1 1 0 10-1.41 0 1 1 0 001.41 0zM12 4a1 1 0 10-1-1 1 1 0 001 1zm5.66 13.66a1 1 0 101.41 0 1 1 0 00-1.41 0zM21 11a1 1 0 101 1 1 1 0 00-1-1zm-3.34-6.07a1 1 0 101.41 0 1 1 0 00-1.41 0zM12 20a1 1 0 101 1 1 1 0 00-1-1zm0-14a6 6 0 106 6 6 6 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBrightnessLow);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
