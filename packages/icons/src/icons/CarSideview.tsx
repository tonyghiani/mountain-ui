import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCarSideview(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 9.5h-.32l-1.25-3.12a3 3 0 00-2.78-1.88h-6A3 3 0 005.7 6.91L5.18 9.5H5a3 3 0 00-3 3v3a1 1 0 001 1h1a3 3 0 006 0h4a3 3 0 006 0h1a1 1 0 001-1v-3a3 3 0 00-3-3zm-6-3h1.65a1 1 0 01.92.63l.95 2.37H13zm-5.34.8a1 1 0 011-.8H11v3H7.22zM7 17.5a1 1 0 111-1 1 1 0 01-1 1zm10 0a1 1 0 111-1 1 1 0 01-1 1zm3-3h-.78a3 3 0 00-4.44 0H9.22a3 3 0 00-4.44 0H4v-2a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCarSideview);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
