import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgRepeat(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5.5 17.5H4v-11h7.8l-.8.79a1 1 0 001.41 1.42l2.5-2.5a1 1 0 000-1.42l-2.5-2.5a1 1 0 00-1.41 0 1 1 0 000 1.42l.79.79H3a1 1 0 00-1 1v13a1 1 0 001 1h2.5a1 1 0 000-2zM21 4.5h-2.5a1 1 0 000 2H20v11h-8.37l.79-.79a1 1 0 000-1.42 1 1 0 00-1.41 0l-2.5 2.5a1 1 0 000 1.42l2.5 2.5a1 1 0 001.41-1.42l-.79-.79H21a1 1 0 001-1v-13a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRepeat);
export default ForwardRef;
