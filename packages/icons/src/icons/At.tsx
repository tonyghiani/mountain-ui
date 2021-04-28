import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 105 18.66 1 1 0 10-1-1.73A8 8 0 1120 12v.75a1.75 1.75 0 01-3.5 0V8.5a1 1 0 00-1-1 1 1 0 00-1 .79A4.45 4.45 0 0012 7.5a4.5 4.5 0 103.3 7.5 3.74 3.74 0 006.7-2.25V12A10 10 0 0012 2zm0 12.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAt);
export default ForwardRef;
