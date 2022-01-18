import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgFileRedoAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 13a1 1 0 00-1-1H8a1 1 0 000 2h5a1 1 0 001-1zm-3 7H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v1a1 1 0 002 0V9v-.06a1.18 1.18 0 00-.06-.27v-.09a.92.92 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09a.86.86 0 00-.32-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h5a1 1 0 000-2zm2-14.59L15.59 8H14a1 1 0 01-1-1zM20 14a1 1 0 00-.91.6A4.07 4.07 0 0017 14a4 4 0 102.64 7 1 1 0 00-1.32-1.51A2 2 0 0117 20a2 2 0 111-3.75h-.22a1 1 0 000 2H20a1 1 0 001-1V15a1 1 0 00-1-1zM8 10h1a1 1 0 000-2H8a1 1 0 000 2zm0 6a1 1 0 000 2h2a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileRedoAlt);
export default ForwardRef;
