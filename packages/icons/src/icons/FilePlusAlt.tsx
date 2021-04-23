import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFilePlusAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 18h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2zm-7 2H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v3a1 1 0 002 0V9v-.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.29.29 0 00-.1 0 1.1 1.1 0 00-.31-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h7a1 1 0 000-2zm0-14.59L15.59 8H14a1 1 0 01-1-1zM8 8a1 1 0 000 2h1a1 1 0 000-2zm5 8H8a1 1 0 000 2h5a1 1 0 000-2zm1-4H8a1 1 0 000 2h6a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFilePlusAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;