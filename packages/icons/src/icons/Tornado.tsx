import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTornado(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 21H8a1 1 0 000 2h2a1 1 0 000-2zm1-4H6a1 1 0 000 2h5a1 1 0 000-2zm7-15a1 1 0 00-1-1H3a1 1 0 000 2h14a1 1 0 001-1zm3 3H6a1 1 0 000 2h15a1 1 0 000-2zm-2 4h-9a1 1 0 000 2h9a1 1 0 000-2zm-5 4H8a1 1 0 000 2h6a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTornado);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;