import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMeetingBoard(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 10h2a1 1 0 000-2H7a1 1 0 000 2zm14-6h-8V3a1 1 0 00-2 0v1H3a1 1 0 00-1 1v10a3 3 0 003 3h4.59l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l2.29-2.3V21a1 1 0 002 0v-1.59l2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42L14.41 18H19a3 3 0 003-3V5a1 1 0 00-1-1zm-1 11a1 1 0 01-1 1H5a1 1 0 01-1-1V6h16zM7 14h6a1 1 0 000-2H7a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMeetingBoard);
export default ForwardRef;
