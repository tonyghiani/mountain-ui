import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLeftToRightTextDirection(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.42 17.62a1 1 0 00-.21-.33l-3-3a1 1 0 00-1.42 1.42l1.3 1.29H3.5a1 1 0 000 2h14.59l-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l3-3a1 1 0 00.21-.33 1 1 0 000-.76zM8.5 10v4a1 1 0 002 0V4h2v10a1 1 0 002 0V4h1a1 1 0 000-2h-7a4 4 0 000 8zm0-6v4a2 2 0 010-4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLeftToRightTextDirection);
export default ForwardRef;
