import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBorderBottom(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 13.5a1 1 0 10-1-1 1 1 0 001 1zm0 4a1 1 0 10-1-1 1 1 0 001 1zm0-8a1 1 0 10-1-1 1 1 0 001 1zm-4-4a1 1 0 10-1-1 1 1 0 001 1zm0 8a1 1 0 10-1-1 1 1 0 001 1zm12-8a1 1 0 10-1-1 1 1 0 001 1zm-4 8a1 1 0 10-1-1 1 1 0 001 1zm-4-8a1 1 0 10-1-1 1 1 0 001 1zm4 0a1 1 0 10-1-1 1 1 0 001 1zm4 10a1 1 0 101 1 1 1 0 00-1-1zm0-4a1 1 0 101 1 1 1 0 00-1-1zm0 8H4a1 1 0 000 2h16a1 1 0 000-2zm0-12a1 1 0 101 1 1 1 0 00-1-1zm-16 6a1 1 0 10-1-1 1 1 0 001 1zm0-4a1 1 0 10-1-1 1 1 0 001 1zm0 8a1 1 0 10-1-1 1 1 0 001 1zm0-12a1 1 0 10-1-1 1 1 0 001 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBorderBottom);
export default ForwardRef;
