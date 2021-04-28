import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWatchAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 8.61l-1-5.77A1 1 0 0015 2H9a1 1 0 00-1 .84L7 8.61a6 6 0 000 6.78l1 5.77A1 1 0 009 22h6a1 1 0 001-.84l1-5.77a6 6 0 000-6.78zM9.85 4h4.3l.44 2.59a6 6 0 00-5.18 0zm4.3 16h-4.3l-.44-2.59a6 6 0 005.18 0zM12 16a4 4 0 114-4 4 4 0 01-4 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWatchAlt);
export default ForwardRef;
