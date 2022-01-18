import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgWindows(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 2L11.2 3.6v8l10.8-.1V2zM10.2 12.5L2 12.4v6.8l8.1 1.1.1-7.8zM2 4.8v6.8h8.1V3.7L2 4.8zm9.1 7.7v7.9L22 22v-9.4l-10.9-.1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWindows);
export default ForwardRef;
