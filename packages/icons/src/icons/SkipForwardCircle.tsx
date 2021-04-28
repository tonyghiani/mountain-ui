import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSkipForwardCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.5 7a1 1 0 00-1 1v1.69l-4-2.31a2 2 0 00-3 1.73v5.78a2 2 0 001 1.73 2 2 0 002 0l4-2.31V16a1 1 0 002 0V8a1 1 0 00-1-1zm-1 5l-5 2.89V9.11l5 2.88zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSkipForwardCircle);
export default ForwardRef;
