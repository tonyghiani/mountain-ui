import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCapsule(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.5 4.5a5.12 5.12 0 00-7.24 0L4.5 12.26a5.12 5.12 0 107.24 7.24l7.76-7.76a5.12 5.12 0 000-7.24zm-9.18 13.59a3.21 3.21 0 01-4.41 0 3.13 3.13 0 010-4.41l3.18-3.18 4.41 4.41zm7.77-7.77l-3.18 3.18-4.41-4.41 3.18-3.18a3.12 3.12 0 014.41 4.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCapsule);
export default ForwardRef;
