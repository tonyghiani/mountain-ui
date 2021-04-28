import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCalendarAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 19a1 1 0 10-1-1 1 1 0 001 1zm5 0a1 1 0 10-1-1 1 1 0 001 1zm0-4a1 1 0 10-1-1 1 1 0 001 1zm-5 0a1 1 0 10-1-1 1 1 0 001 1zm7-12h-1V2a1 1 0 00-2 0v1H8V2a1 1 0 00-2 0v1H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V6a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-9h16zm0-11H4V6a1 1 0 011-1h1v1a1 1 0 002 0V5h8v1a1 1 0 002 0V5h1a1 1 0 011 1zM7 15a1 1 0 10-1-1 1 1 0 001 1zm0 4a1 1 0 10-1-1 1 1 0 001 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCalendarAlt);
export default ForwardRef;
