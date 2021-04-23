import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgScalingRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.92 2.62a1 1 0 00-.54-.54A1 1 0 0021 2h-4a1 1 0 000 2h1.59L12 10.59 9.88 8.46a1 1 0 00-1.42 1.42L10.59 12 4 18.59V17a1 1 0 00-2 0v4a1 1 0 00.08.38 1 1 0 00.54.54A1 1 0 003 22h4a1 1 0 000-2H5.41L12 13.41l2.12 2.13a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42L13.41 12 20 5.41V7a1 1 0 002 0V3a1 1 0 00-.08-.38z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgScalingRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;