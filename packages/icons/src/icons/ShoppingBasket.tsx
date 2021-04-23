import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShoppingBasket(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 18a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zm-4 0a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zm9-12h-1.38l-1.73-3.45a1 1 0 10-1.78.9L15.38 6H8.62l1.27-2.55a1 1 0 00-1.78-.9L6.38 6H5a3 3 0 00-.92 5.84l.74 7.46a3 3 0 003 2.7h8.38a3 3 0 003-2.7l.74-7.46A3 3 0 0019 6zm-1.81 13.1a1 1 0 01-1 .9H7.81a1 1 0 01-1-.9L6.1 12h11.8zM19 10H5a1 1 0 010-2h14a1 1 0 010 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShoppingBasket);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;