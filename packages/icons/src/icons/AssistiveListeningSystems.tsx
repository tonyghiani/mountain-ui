import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgAssistiveListeningSystems(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 3a7 7 0 00-7 7 1 1 0 002 0 5 5 0 0110 0 5.07 5.07 0 01-.71 2.57L11.73 20A2 2 0 0110 21a2 2 0 01-2-2 1 1 0 00-2 0 4 4 0 004 4 4 4 0 003.5-2.07l3.56-7.43A6.93 6.93 0 0018 10a7 7 0 00-7-7zM4 15a1 1 0 101 1 1 1 0 00-1-1zM17.59 1.2a1 1 0 10-1.2 1.6A9 9 0 0120 10a1 1 0 002 0 11.06 11.06 0 00-4.41-8.8zM11 9a1 1 0 011 1 1 1 0 002 0 3 3 0 00-6 0 3 3 0 00.51 1.68 3.5 3.5 0 00.47.54l.2.22a1 1 0 010 1.11 1 1 0 00.25 1.39 1 1 0 00.57.18 1 1 0 00.82-.43 3 3 0 000-3.39 3.39 3.39 0 00-.35-.42l-.14-.14a1.37 1.37 0 01-.16-.18A1 1 0 0110 10a1 1 0 011-1zm-4 6a1 1 0 10-1-1 1 1 0 001 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAssistiveListeningSystems);
export default ForwardRef;
