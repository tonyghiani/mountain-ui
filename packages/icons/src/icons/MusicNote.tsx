import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMusicNote(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.12 2.21a1 1 0 00-.86-.21l-8 2a1 1 0 00-.76 1v10.35A3.45 3.45 0 008 15a3.5 3.5 0 103.5 3.5v-7.72L18.74 9h.07l.19-.15.15-.1a.93.93 0 00.13-.15.78.78 0 00.1-.15.55.55 0 00.06-.18.58.58 0 000-.19.24.24 0 000-.08V3a1 1 0 00-.32-.79zM8 20a1.5 1.5 0 111.5-1.5A1.5 1.5 0 018 20zm9.5-12.78l-6 1.5V5.78l6-1.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMusicNote);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
