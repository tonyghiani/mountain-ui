import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShoppingCartAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.5 15a3 3 0 00-1.9-2.78l1.87-7a1 1 0 00-.18-.87A1 1 0 0020.5 4H6.8l-.33-1.26A1 1 0 005.5 2h-2v2h1.23l2.48 9.26a1 1 0 001 .74H18.5a1 1 0 010 2h-13a1 1 0 000 2h1.18a3 3 0 105.64 0h2.36a3 3 0 105.82 1 2.94 2.94 0 00-.4-1.47A3 3 0 0021.5 15zm-3.91-3H9L7.34 6H19.2zM9.5 20a1 1 0 111-1 1 1 0 01-1 1zm8 0a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShoppingCartAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;