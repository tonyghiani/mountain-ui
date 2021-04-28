import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSilence(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 11a1 1 0 10-1-1 1 1 0 001 1zm6 0a1 1 0 10-1-1 1 1 0 001 1zm1 3a1 1 0 00-2 0h-1a1 1 0 00-2 0h-1a1 1 0 00-2 0 1 1 0 000 2 1 1 0 002 0h1a1 1 0 002 0h1a1 1 0 002 0 1 1 0 000-2zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSilence);
export default ForwardRef;
