import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFastMail(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M4.79 10.5h-2a1 1 0 100 2h2a1 1 0 000-2zm16.78-2.84V7.6a3 3 0 00-2.37-1.1h-7.93a3 3 0 00-2 .74A2.93 2.93 0 008.31 9l-.88 5a3 3 0 00.66 2.45 3 3 0 002.29 1.07h7.94a3 3 0 003-2.48l.88-5a3 3 0 00-.63-2.38zm-2.74.84l-3.4 2.76a1 1 0 01-1.38-.12L11.72 8.5zm.48 6.17a1 1 0 01-1 .83h-7.93a1 1 0 01-.76-.36 1 1 0 01-.22-.81l.8-4.53 2.35 2.66a3 3 0 004.14.35L20.13 10zM5.79 6.5h-3a1 1 0 100 2h3a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFastMail);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;