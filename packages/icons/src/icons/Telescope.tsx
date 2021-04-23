import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTelescope(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.9 7.59l-1-3.87a3 3 0 00-3.71-2.12l-1.93.52a1 1 0 00-.71 1.23l.26 1L4.19 7.16a1 1 0 00-.71 1.22l.26 1-1 .26a1 1 0 00.25 2 1.09 1.09 0 00.26 0l1-.27.26 1a1 1 0 00.46.6 1 1 0 00.5.14.75.75 0 00.26 0L9 12.08v.42a2.9 2.9 0 00.3 1.28l-5 5a1 1 0 001.41 1.42l5-5 .28.11v6.19a1 1 0 002 0v-6.18a2.52 2.52 0 00.29-.12l5 5a1 1 0 101.41-1.42l-5-5A3.09 3.09 0 0015 12.5v-2l1.35-.36.25 1a1 1 0 001 .74h.26l1.93-.52a3 3 0 002.11-3.77zM13 12.5a1 1 0 01-.28.69 1 1 0 01-.69.28 1 1 0 01-.7-.29 1 1 0 01-.29-.7v-1L13 11zm-6.81-1.74l-.52-1.93 9.66-2.59.26 1 .26 1zm13.68-1.9a1 1 0 01-.61.47l-1 .26-.78-2.9L17 4.76l-.26-1 1-.26a1 1 0 011.23.71l1 3.87a1 1 0 01-.1.78z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTelescope);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;