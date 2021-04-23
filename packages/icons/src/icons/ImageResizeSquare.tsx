import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageResizeSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 8.1a1 1 0 001-1v-.19a1 1 0 00-2 0v.19a1 1 0 001 1zm0-4a1 1 0 00.42-.1 1 1 0 00-.32-2H3a1.09 1.09 0 00-1 1.1 1 1 0 001 .95zm17.39-.19A1 1 0 0022 3a1 1 0 00-1-1h-.1a1 1 0 00-.51 1.86zm-8.5.09h.22a1 1 0 000-2h-.22a1 1 0 000 2zm-4.5 0h.21a1 1 0 000-2h-.21a1 1 0 000 2zM21 20a1 1 0 00-.42.1 1 1 0 00.32 1.9h.1a1.09 1.09 0 001-1.1 1 1 0 00-1-.9zm-7-9a1 1 0 00-1-1H3.27A1.08 1.08 0 003 10a1 1 0 00-1 1v10a1 1 0 001 1h10.1a1 1 0 00.9-1.42zm-2 9H5.52l3.91-3.9a.33.33 0 01.47 0l2.1 2.09zm0-4.63l-.68-.69a2.35 2.35 0 00-3.31 0l-4 4V12h8zm9 0a1 1 0 00-1 1v.21a1 1 0 002 0v-.18a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.23a1 1 0 102 0v-.21a1 1 0 00-1-1zm0 4.5a1 1 0 00-1 1v.22a1 1 0 002 0v-.22a1 1 0 00-1-.98zM17.1 20h-.2a1 1 0 100 2h.2a1 1 0 000-2zm-.49-16a1 1 0 000-2h-.21a1 1 0 100 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageResizeSquare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;