import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSignal(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6 15a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm4-3a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm8-8a1 1 0 00-1 1v14a1 1 0 002 0V5a1 1 0 00-1-1zm-4 4a1 1 0 00-1 1v10a1 1 0 002 0V9a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSignal);
export default ForwardRef;
