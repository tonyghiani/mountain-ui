import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShoppingCart(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M8.5 19a1.5 1.5 0 101.5 1.5A1.5 1.5 0 008.5 19zM19 16H7a1 1 0 010-2h8.491a3.013 3.013 0 002.885-2.176l1.585-5.55A1 1 0 0019 5H6.74A3.007 3.007 0 003.92 3H3a1 1 0 000 2h.921a1.005 1.005 0 01.962.725l.155.545v.005l1.641 5.742A3 3 0 007 18h12a1 1 0 000-2zm-1.326-9l-1.22 4.274a1.005 1.005 0 01-.963.726H8.754l-.255-.892L7.326 7zM16.5 19a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShoppingCart);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
