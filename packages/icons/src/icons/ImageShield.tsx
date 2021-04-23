import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageShield(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.13 2.36a1 1 0 00-.84-.2 2.7 2.7 0 01-2.2-.47 1 1 0 00-1.18 0 2.7 2.7 0 01-2.2.47 1 1 0 00-.84.2 1 1 0 00-.37.78v3.31a4.63 4.63 0 001.84 3.7l1.57 1.16a1 1 0 001.18 0l1.57-1.16a4.63 4.63 0 001.84-3.7V3.14a1 1 0 00-.37-.78zM20.5 6.45a2.62 2.62 0 01-1 2.09l-1 .72-1-.72a2.62 2.62 0 01-1-2.09V4.22a4.81 4.81 0 002-.54 4.81 4.81 0 002 .54zm-2 7.05a1 1 0 00-1 1v.39L16 13.41a2.77 2.77 0 00-3.93 0l-.7.7-2.46-2.49a2.85 2.85 0 00-3.93 0L3.5 13.1V7.5a1 1 0 011-1h7a1 1 0 000-2h-7a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zm-14 7a1 1 0 01-1-1v-3.57L6.4 13a.79.79 0 011.09 0l3.17 3.17L15 20.5zm13-1a1 1 0 01-.18.53l-4.51-4.51.7-.7a.78.78 0 011.1 0l2.89 2.9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageShield);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;