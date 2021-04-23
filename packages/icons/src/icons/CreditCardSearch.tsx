import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCreditCardSearch(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 17.57a4.3 4.3 0 10-3.67 2.06 4.37 4.37 0 002.24-.63l1.72 1.73a1 1 0 001.42 0 1 1 0 000-1.42zM18 17a2.37 2.37 0 01-3.27 0 2.32 2.32 0 010-3.27 2.31 2.31 0 013.27 0A2.32 2.32 0 0118 17zm1-14H5a3 3 0 00-3 3v9a3 3 0 003 3h4a1 1 0 000-2H5a1 1 0 01-1-1V9h16v1a1 1 0 002 0V6a3 3 0 00-3-3zm1 4H4V6a1 1 0 011-1h14a1 1 0 011 1zm-10 4H7a1 1 0 000 2h3a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCreditCardSearch);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;