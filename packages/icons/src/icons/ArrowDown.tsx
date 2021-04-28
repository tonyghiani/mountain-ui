import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M17.71 11.29a1 1 0 00-1.42 0L13 14.59V7a1 1 0 00-2 0v7.59l-3.29-3.3a1 1 0 00-1.42 1.42l5 5a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l5-5a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowDown);
export default ForwardRef;
