import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.42 8.22a7 7 0 00-13.36 1.89A4 4 0 006 18h2a1 1 0 000-2H6a2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 13a3 3 0 01-3 3 1 1 0 000 2 5 5 0 001.42-9.78zm-5.5 10.4a.56.56 0 00-.09-.17l-.12-.16a1.15 1.15 0 00-.33-.21 1 1 0 00-1.09.21l-.12.16a.56.56 0 00-.09.17.64.64 0 00-.06.18 1.5 1.5 0 000 .2 1.23 1.23 0 000 .19.6.6 0 00.06.19.56.56 0 00.09.17l.12.16A1.05 1.05 0 0012 20a1 1 0 00.38-.08 1.15 1.15 0 00.33-.21l.12-.16a.56.56 0 00.09-.17.6.6 0 00.06-.19A1.23 1.23 0 0013 19a1.5 1.5 0 000-.2.64.64 0 00-.08-.18zM12 11a3 3 0 00-2.6 1.5 1 1 0 00.37 1.37 1 1 0 001.36-.37A1 1 0 0112 13a1 1 0 010 2 1 1 0 000 2 3 3 0 000-6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudQuestion);
export default ForwardRef;
