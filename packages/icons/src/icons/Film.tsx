import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFilm(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2a1 1 0 00-1 1v2h-2V3a1 1 0 00-2 0v1H8V3a1 1 0 00-2 0v2H4V3a1 1 0 00-2 0v18a1 1 0 002 0v-2h2v2a1 1 0 002 0v-1h8v1a1 1 0 002 0v-2h2v2a1 1 0 002 0V3a1 1 0 00-1-1zM6 17H4v-2h2zm0-4H4v-2h2zm0-4H4V7h2zm10 9H8v-5h8zm0-7H8V6h8zm4 6h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFilm);
export default ForwardRef;
