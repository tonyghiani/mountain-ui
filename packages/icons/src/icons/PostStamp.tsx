import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgPostStamp(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.5 5.5a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1 .5.5 0 01-1 0 1 1 0 00-1-1h-3a1 1 0 00-1 1 .5.5 0 01-1 0 1 1 0 00-1-1h-3a1 1 0 00-1 1 .5.5 0 01-1 0 1 1 0 00-1-1h-3a1 1 0 00-1 1v3a1 1 0 001 1 .5.5 0 010 1 1 1 0 00-1 1v3a1 1 0 001 1 .5.5 0 010 1 1 1 0 00-1 1v3a1 1 0 001 1 .5.5 0 010 1 1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1 .5.5 0 011 0 1 1 0 001 1h3a1 1 0 001-1 .5.5 0 011 0 1 1 0 001 1h3a1 1 0 001-1 .5.5 0 011 0 1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1 .5.5 0 010-1 1 1 0 001-1v-3a1 1 0 00-1-1 .5.5 0 010-1 1 1 0 001-1v-3a1 1 0 00-1-1 .5.5 0 010-1zm-1-1.79a2.5 2.5 0 000 4.58v1.42a2.5 2.5 0 000 4.58v1.42a2.5 2.5 0 000 4.58v1.21h-1.21a2.5 2.5 0 00-4.58 0h-1.42a2.5 2.5 0 00-4.58 0H8.29a2.5 2.5 0 00-4.58 0H2.5v-1.21a2.5 2.5 0 000-4.58v-1.42a2.5 2.5 0 000-4.58V8.29a2.5 2.5 0 000-4.58V2.5h1.21a2.5 2.5 0 004.58 0h1.42a2.5 2.5 0 004.58 0h1.42a2.5 2.5 0 004.58 0h1.21zM12 5a7 7 0 000 14 6.93 6.93 0 003.5-.94 1 1 0 10-1-1.73A5 5 0 1117 12v.5a.83.83 0 01-.83.83.84.84 0 01-.84-.83V9.67a1 1 0 00-1.78-.6 3.25 3.25 0 00-1.55-.4 3.33 3.33 0 000 6.66 3.28 3.28 0 002.17-.82 2.84 2.84 0 004.83-2V12a7 7 0 00-7-7zm0 8.33A1.33 1.33 0 1113.33 12 1.32 1.32 0 0112 13.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPostStamp);
export default ForwardRef;
