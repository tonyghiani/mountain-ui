import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAsterisk(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.562 14.634L14 12l4.562-2.634a1 1 0 00-1-1.732L13 10.268V5a1 1 0 00-2 0v5.268L6.438 7.634a1 1 0 00-1 1.732L10 12l-4.562 2.634a1 1 0 001 1.732L11 13.732V19a1 1 0 002 0v-5.268l4.562 2.634a1 1 0 001-1.732z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAsterisk);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
