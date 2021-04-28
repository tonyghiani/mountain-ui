import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowsResize(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.92 11.62a1 1 0 00-.21-.33l-2.5-2.5a1 1 0 00-1.42 1.42l.8.79H13V8a1 1 0 00-2 0v3H5.41l.8-.79a1 1 0 00-1.42-1.42l-2.5 2.5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l2.5 2.5a1 1 0 001.42 0 1 1 0 000-1.42l-.8-.79H11v3a1 1 0 002 0v-3h5.59l-.8.79a1 1 0 000 1.42 1 1 0 001.42 0l2.5-2.5a1 1 0 00.21-.33 1 1 0 000-.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowsResize);
export default ForwardRef;
