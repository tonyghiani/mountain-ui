import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAlignLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 7h18a1 1 0 000-2H3a1 1 0 000 2zm0 4h14a1 1 0 000-2H3a1 1 0 000 2zm18 2H3a1 1 0 000 2h18a1 1 0 000-2zm-4 4H3a1 1 0 000 2h14a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAlignLeft);
export default ForwardRef;
