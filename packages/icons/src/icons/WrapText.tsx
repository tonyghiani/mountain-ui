import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWrapText(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 7h18a1 1 0 000-2H3a1 1 0 000 2zm6 8H3a1 1 0 000 2h6a1 1 0 000-2zm9.5-5H3a1 1 0 000 2h15.5a1.5 1.5 0 010 3h-3.09l.3-.29a1 1 0 00-1.42-1.42l-2 2a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l2 2a1 1 0 001.42 0 1 1 0 000-1.42l-.3-.29h3.09a3.5 3.5 0 000-7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWrapText);
export default ForwardRef;
