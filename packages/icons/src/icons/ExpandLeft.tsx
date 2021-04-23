import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgExpandLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.17 10.17a1 1 0 00.71-.29 1 1 0 000-1.42L5.41 4H7a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v4a1 1 0 002 0V5.41l4.46 4.47a1 1 0 00.71.29zm6.37-1.71a1 1 0 00-1.42 0l-5.66 5.66a1 1 0 000 1.42 1 1 0 00.71.29 1 1 0 00.71-.29l5.66-5.66a1 1 0 000-1.42zM21 16a1 1 0 00-1 1v1.59l-4.46-4.47a1 1 0 10-1.42 1.42L18.59 20H17a1 1 0 000 2h4a1 1 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0022 21v-4a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgExpandLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;