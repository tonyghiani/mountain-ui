import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBloggerAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.991 13h-4a1 1 0 000 2h4a1 1 0 000-2zm-4-2h1a1 1 0 000-2h-1a1 1 0 000 2zm6-1V9a4.004 4.004 0 00-4-4h-2a5.006 5.006 0 00-5 5v4a5.006 5.006 0 005 5h4a5.006 5.006 0 005-5v-1a3.005 3.005 0 00-3-3zm0 0v.001h-1zm1 4a3.003 3.003 0 01-3 3h-4a3.003 3.003 0 01-3-3v-4a3.003 3.003 0 013-3h2a2.003 2.003 0 012 2v1a2.003 2.003 0 002 2 1 1 0 011 1zm3-13h-16a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm1 19a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBloggerAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;