import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSpinnerAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.804 15a1 1 0 00-1.366-.366l-1.732 1a1 1 0 001 1.732l1.732-1A1 1 0 006.804 15zM3.706 8.366l1.732 1a1 1 0 101-1.732l-1.732-1a1 1 0 00-1 1.732zM6 12a1 1 0 00-1-1H3a1 1 0 000 2h2a1 1 0 001-1zm11.196-3a1 1 0 001.366.366l1.732-1a1 1 0 10-1-1.732l-1.732 1A1 1 0 0017.196 9zM15 6.804a1 1 0 001.366-.366l1-1.732a1 1 0 10-1.732-1l-1 1.732A1 1 0 0015 6.804zm5.294 8.83l-1.732-1a1 1 0 10-1 1.732l1.732 1a1 1 0 001-1.732zm-3.928 1.928a1 1 0 10-1.732 1l1 1.732a1 1 0 101.732-1zM21 11h-2a1 1 0 000 2h2a1 1 0 000-2zm-9 7a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm-3-.804a1 1 0 00-1.366.366l-1 1.732a1 1 0 001.732 1l1-1.732A1 1 0 009 17.196zM12 2a1 1 0 00-1 1v2a1 1 0 002 0V3a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSpinnerAlt);
export default ForwardRef;
