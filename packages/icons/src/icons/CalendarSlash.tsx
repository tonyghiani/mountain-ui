import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCalendarSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.66 7H15v1a1 1 0 002 0V7h1a1 1 0 011 1v3h-1.34a1 1 0 000 2H19v1.34a1 1 0 102 0V8a3 3 0 00-3-3h-1V4a1 1 0 00-2 0v1h-3.34a1 1 0 000 2zm10.05 13.29l-1.6-1.6-16.4-16.4a1 1 0 00-1.42 1.42l1.91 1.9A3 3 0 003 8v10a3 3 0 003 3h12a3 3 0 001.29-.3l1 1a1 1 0 001.42 0 1 1 0 000-1.41zM5 8a1 1 0 01.66-.93L9.59 11H5zm1 11a1 1 0 01-1-1v-5h6.59l6 6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCalendarSlash);
export default ForwardRef;
