import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgJackhammer(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.85 15.69a1 1 0 00-1.41 0l-2.06 2.06a1 1 0 00.45 1.67l.26.07-.8.8a1 1 0 000 1.42 1 1 0 001.42 0l2-2a1 1 0 00.26-1 1 1 0 00-.71-.71l-.26-.06.83-.84a1 1 0 00.02-1.41zm-10.94 3.8l.26-.07a1 1 0 00.45-1.67l-2.06-2.06a1 1 0 00-1.41 1.41l.83.84-.26.06a1 1 0 00-.71.71 1 1 0 00.26 1l2 2a1 1 0 001.42 0 1 1 0 000-1.42zM21 4a1 1 0 00-1 1h-3a3 3 0 00-3-3h-4a3 3 0 00-3 3H4a1 1 0 00-2 0v2a1 1 0 002 0h3v2a3 3 0 002 2.83V13a2 2 0 002 2v6a1 1 0 002 0v-6a2 2 0 002-2v-1.17A3 3 0 0017 9V7h3a1 1 0 002 0V5a1 1 0 00-1-1zm-6 5a1 1 0 01-1 1 1 1 0 00-1 1v2h-2v-2a1 1 0 00-1-1 1 1 0 01-1-1V5a1 1 0 011-1h4a1 1 0 011 1zm-3-3a1 1 0 00-1 1v1a1 1 0 002 0V7a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgJackhammer);
export default ForwardRef;
