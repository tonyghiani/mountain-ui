import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSearchAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.07 16.83L19 14.71a3.08 3.08 0 00-3.4-.57l-.9-.9a7 7 0 10-1.41 1.41l.89.89a3 3 0 00.53 3.46l2.12 2.12a3 3 0 004.24 0 3 3 0 000-4.29zm-8.48-4.24a5 5 0 110-7.08 5 5 0 010 7.08zm7.07 7.07a1 1 0 01-1.42 0l-2.12-2.12a1 1 0 010-1.42 1 1 0 011.42 0l2.12 2.12a1 1 0 010 1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSearchAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
