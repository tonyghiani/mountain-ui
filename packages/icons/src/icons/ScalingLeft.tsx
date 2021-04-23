import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgScalingLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 16a1 1 0 00-1 1v1.59L13.41 12l2.13-2.12a1 1 0 00-1.42-1.42L12 10.59 5.41 4H7a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v4a1 1 0 002 0V5.41L10.59 12l-2.13 2.12a1 1 0 000 1.42 1 1 0 00.71.29 1 1 0 00.71-.29L12 13.41 18.59 20H17a1 1 0 000 2h4a1 1 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0022 21v-4a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgScalingLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
