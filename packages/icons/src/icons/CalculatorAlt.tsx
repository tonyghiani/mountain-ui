import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCalculatorAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5.5 8H6v.5a1 1 0 002 0V8h.5a1 1 0 000-2H8v-.5a1 1 0 00-2 0V6h-.5a1 1 0 000 2zm-.62 11.12a1 1 0 001.41 0l.71-.71.71.71a1 1 0 001.41 0 1 1 0 000-1.41L8.41 17l.71-.71a1 1 0 00-1.41-1.41l-.71.71-.71-.71a1 1 0 00-1.41 1.41l.71.71-.71.71a1 1 0 000 1.41zM20 1H4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3zm-9 20H4a1 1 0 01-1-1v-7h8zm0-10H3V4a1 1 0 011-1h7zm10 9a1 1 0 01-1 1h-7v-8h8zm0-9h-8V3h7a1 1 0 011 1zm-5.5 5.5h3a1 1 0 000-2h-3a1 1 0 000 2zm3-10.5h-3a1 1 0 000 2h3a1 1 0 000-2zm-3 13.5h3a1 1 0 000-2h-3a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCalculatorAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;