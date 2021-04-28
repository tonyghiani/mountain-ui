import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudShield(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.42 7.22A7 7 0 005.06 9.11a4 4 0 00-.38 7.66 1.13 1.13 0 00.32.05 1 1 0 00.32-2A2 2 0 014 13a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1 1 0 101 1.74A5 5 0 0022 12a5 5 0 00-3.58-4.78zm-3.63 4.44a2.73 2.73 0 01-2.2-.47 1 1 0 00-1.18 0 2.72 2.72 0 01-2.2.47 1 1 0 00-.84.2 1 1 0 00-.37.77V16a4.63 4.63 0 001.84 3.7l1.57 1.15a1 1 0 001.18 0l1.57-1.16A4.6 4.6 0 0016 16v-3.37a1 1 0 00-.37-.77 1 1 0 00-.84-.2zM14 16a2.62 2.62 0 01-1 2l-1 .72-1-.72a2.62 2.62 0 01-1-2v-2.28a4.68 4.68 0 002-.55 4.68 4.68 0 002 .55z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudShield);
export default ForwardRef;
