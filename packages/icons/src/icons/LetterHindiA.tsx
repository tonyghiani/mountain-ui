import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLetterHindiA(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.022 3h-5a1 1 0 000 2h1.5v6h-4.95a4.951 4.951 0 001.026-3 5 5 0 00-9.33-2.5 1 1 0 101.731 1A3 3 0 117.598 11a1 1 0 000 2 3 3 0 11-2.599 4.5 1 1 0 00-1.731 1 5 5 0 009.33-2.5 4.951 4.951 0 00-1.026-3h4.95v7a1 1 0 002 0V5h1.5a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLetterHindiA);
export default ForwardRef;
