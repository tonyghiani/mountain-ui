import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelopeQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16.77 5.37A1 1 0 0018.13 5a1 1 0 01.87-.5 1 1 0 010 2 1 1 0 000 2A3 3 0 1016.4 4a1 1 0 00.37 1.37zM21 13.5a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V8.91l5.88 5.89a3 3 0 004.24 0l1.64-1.64a1 1 0 10-1.42-1.42l-1.64 1.64a1 1 0 01-1.4 0L5.41 7.5H13a1 1 0 000-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm-2.71-3.71a1 1 0 000 1.42l.15.12a.76.76 0 00.18.09.64.64 0 00.18.06h.2a1 1 0 00.71-1.71 1 1 0 00-1.42.02z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeQuestion);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;