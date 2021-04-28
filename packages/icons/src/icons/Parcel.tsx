import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgParcel(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 14h2a1 1 0 000-2H7a1 1 0 000 2zm6 2H7a1 1 0 000 2h6a1 1 0 000-2zm6-14H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm-5 2v3.29l-1.51-.84a1 1 0 00-1 0L10 7.29V4zm6 15a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3v5a1 1 0 00.5.86 1 1 0 001 0L12 8.47l2.51 1.4A1 1 0 0015 10a1 1 0 001-1V4h3a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgParcel);
export default ForwardRef;
