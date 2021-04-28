import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBorderHorizontal(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 5a1 1 0 10-1-1 1 1 0 001 1zM4 9a1 1 0 10-1-1 1 1 0 001 1zm8 0a1 1 0 10-1-1 1 1 0 001 1zM4 5a1 1 0 10-1-1 1 1 0 001 1zm12 0a1 1 0 10-1-1 1 1 0 001 1zm-4 0a1 1 0 10-1-1 1 1 0 001 1zm8 0a1 1 0 10-1-1 1 1 0 001 1zM4 19a1 1 0 101 1 1 1 0 00-1-1zm16 0a1 1 0 101 1 1 1 0 00-1-1zm0-4a1 1 0 101 1 1 1 0 00-1-1zm0-4H4a1 1 0 000 2h16a1 1 0 000-2zm-4 8a1 1 0 101 1 1 1 0 00-1-1zM4 15a1 1 0 101 1 1 1 0 00-1-1zm16-8a1 1 0 101 1 1 1 0 00-1-1zM8 19a1 1 0 101 1 1 1 0 00-1-1zm4 0a1 1 0 101 1 1 1 0 00-1-1zm0-4a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBorderHorizontal);
export default ForwardRef;
