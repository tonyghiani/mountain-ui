import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgAnkh(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 12h-3.09A7.23 7.23 0 0017 7 5 5 0 007 7a7.23 7.23 0 002.09 5H6a1 1 0 000 2h5v7a1 1 0 002 0v-7h5a1 1 0 000-2zm-6-.16c-.93-.62-3-2.26-3-4.84a3 3 0 016 0c0 2.58-2.07 4.23-3 4.84z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAnkh);
export default ForwardRef;
