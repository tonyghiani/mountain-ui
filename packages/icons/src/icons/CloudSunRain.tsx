import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudSunRain(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.5 15a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zM22 7h-1.1a5.22 5.22 0 00-.73-1.76l.83-.77a1 1 0 10-1.42-1.42l-.77.78A5 5 0 0017 3.1V2a1 1 0 00-2 0v1.1a5.22 5.22 0 00-1.76.73l-.77-.78a1 1 0 00-1.42 1.42l.78.77a5.06 5.06 0 00-.77 2A5.76 5.76 0 009.5 7a6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58 1.14 1.14 0 00.4.08 1 1 0 00.4-1.92A1.48 1.48 0 013 15.5 1.5 1.5 0 014.5 14a1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.32 2.32 0 01.94 4.23 1 1 0 001.1 1.68 4.34 4.34 0 001.9-3.62 4.41 4.41 0 00-.45-1.92 5.17 5.17 0 001.21-.58l.77.78A1 1 0 0021 13a1 1 0 000-1.42l-.78-.77A5 5 0 0020.9 9H22a1 1 0 000-2zm-3.87 3.12A3 3 0 0116 11h-.06a4.12 4.12 0 00-1-.46 5.93 5.93 0 00-2-2.38V8a3 3 0 01.87-2.12 3.1 3.1 0 014.25 0 3 3 0 010 4.25zM7.5 20a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm4-1a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0-5a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudSunRain);
export default ForwardRef;
