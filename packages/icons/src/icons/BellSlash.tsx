import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBellSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.07 6.12A3.48 3.48 0 0112 6a4 4 0 014 4v1.34a1 1 0 002 0V10a6 6 0 00-5-5.91V3a1 1 0 00-2 0v1.1l-.45.08a1 1 0 00.52 1.94zm10.64 14.17l-18-18a1 1 0 00-1.42 1.42l4.12 4.11A6 6 0 006 10v3.18A3 3 0 004 16v2a1 1 0 001 1h3.14a4 4 0 007.72 0h1.73l2.7 2.71a1 1 0 001.42 0 1 1 0 000-1.42zM8 10a3.31 3.31 0 010-.55L11.59 13H8zm4 10a2 2 0 01-1.72-1h3.44A2 2 0 0112 20zm-6-3v-1a1 1 0 011-1h6.59l2 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBellSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;