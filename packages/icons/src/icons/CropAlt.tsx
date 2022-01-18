import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCropAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 16h-1V7a1 1 0 00-1-1H8V5a1 1 0 00-2 0v1H5a1 1 0 000 2h1v9a1 1 0 001 1h9v1a1 1 0 002 0v-1h1a1 1 0 000-2zm-3 0H8V8h8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCropAlt);
export default ForwardRef;
