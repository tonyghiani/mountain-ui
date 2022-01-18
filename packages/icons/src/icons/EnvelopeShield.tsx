import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgEnvelopeShield(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.63 5.12a1 1 0 00-.84-.2 2.74 2.74 0 01-2.2-.46 1 1 0 00-1.18 0 2.74 2.74 0 01-2.2.46A1 1 0 0014 5.9v3.31a4.62 4.62 0 001.84 3.7l1.57 1.16a1 1 0 001.18 0l1.57-1.16A4.62 4.62 0 0022 9.21V5.9a1 1 0 00-.37-.78zM20 9.21a2.61 2.61 0 01-1 2.09l-1 .7-1-.72a2.61 2.61 0 01-1-2.09V7a4.67 4.67 0 002-.54A4.67 4.67 0 0020 7zm1 6a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V9.67l5.88 5.88a3 3 0 002.11.88 3 3 0 002.15-.9l-.7-.71-.74-.68a1 1 0 01-1.4 0L5.41 8.26H11a1 1 0 000-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-3a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeShield);
export default ForwardRef;
