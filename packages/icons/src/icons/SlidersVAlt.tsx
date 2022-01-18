import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgSlidersVAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 8.18V3a1 1 0 00-2 0v5.18a3 3 0 000 5.64V21a1 1 0 002 0v-7.18a3 3 0 000-5.64zM19 12a1 1 0 111-1 1 1 0 01-1 1zm-6 2.18V3a1 1 0 00-2 0v11.18a3 3 0 000 5.64V21a1 1 0 002 0v-1.18a3 3 0 000-5.64zM12 18a1 1 0 111-1 1 1 0 01-1 1zM6 6.18V3a1 1 0 00-2 0v3.18a3 3 0 000 5.64V21a1 1 0 002 0v-9.18a3 3 0 000-5.64zM5 10a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSlidersVAlt);
export default ForwardRef;
