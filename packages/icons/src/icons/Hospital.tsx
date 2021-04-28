import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHospital(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.5 16.5h-1a1 1 0 000 2h1a1 1 0 000-2zm0-4h-1a1 1 0 000 2h1a1 1 0 000-2zm-5 4h-1a1 1 0 000 2h1a1 1 0 000-2zm0-4h-1a1 1 0 000 2h1a1 1 0 000-2zm14-6h-3v-4a1 1 0 00-1-1h-11a1 1 0 00-1 1v4h-3a1 1 0 00-1 1v14a1 1 0 001 1h19a1 1 0 001-1v-14a1 1 0 00-1-1zm-1 14h-17v-12h3a1 1 0 001-1v-4h9v4a1 1 0 001 1h3zm-4-8a1 1 0 000 2h1a1 1 0 000-2zm-3-5.5H13v-.5a1 1 0 00-2 0V7h-.5a1 1 0 000 2h.5v.5a1 1 0 002 0V9h.5a1 1 0 000-2zm4 9.5h-1a1 1 0 000 2h1a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHospital);
export default ForwardRef;
