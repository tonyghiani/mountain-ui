import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGold(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 11h8a1 1 0 00.77-.37A1 1 0 0017 9.8l-1-5a1 1 0 00-1-.8H9a1 1 0 00-1 .8l-1 5a1 1 0 00.21.83A1 1 0 008 11zm1.82-5h4.36l.6 3H9.22zM22 13.8a1 1 0 00-1-.8h-6a1 1 0 00-1 .8l-1 5a1 1 0 00.21.83A1 1 0 0014 20h8a1 1 0 00.77-.37 1 1 0 00.23-.83zM15.22 18l.6-3h4.36l.6 3zM9 13H3a1 1 0 00-1 .8l-1 5a1 1 0 00.21.83A1 1 0 002 20h8a1 1 0 00.77-.37 1 1 0 00.23-.83l-1-5a1 1 0 00-1-.8zm-5.78 5l.6-3h4.36l.6 3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGold);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;