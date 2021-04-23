import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBorderClear(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 11a1 1 0 101 1 1 1 0 00-1-1zm0 8a1 1 0 101 1 1 1 0 00-1-1zm4 0a1 1 0 101 1 1 1 0 00-1-1zM4 3a1 1 0 101 1 1 1 0 00-1-1zm0 8a1 1 0 101 1 1 1 0 00-1-1zm16-6a1 1 0 10-1-1 1 1 0 001 1zM4 19a1 1 0 101 1 1 1 0 00-1-1zm8-4a1 1 0 101 1 1 1 0 00-1-1zm-8 0a1 1 0 101 1 1 1 0 00-1-1zm0-8a1 1 0 101 1 1 1 0 00-1-1zm4-4a1 1 0 101 1 1 1 0 00-1-1zm12 12a1 1 0 101 1 1 1 0 00-1-1zm0 4a1 1 0 101 1 1 1 0 00-1-1zm0-12a1 1 0 101 1 1 1 0 00-1-1zm-8 4a1 1 0 101 1 1 1 0 00-1-1zm8 0a1 1 0 101 1 1 1 0 00-1-1zm-4-8a1 1 0 101 1 1 1 0 00-1-1zm-4 0a1 1 0 101 1 1 1 0 00-1-1zm0 4a1 1 0 101 1 1 1 0 00-1-1zm4 12a1 1 0 101 1 1 1 0 00-1-1zm0-8a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBorderClear);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
