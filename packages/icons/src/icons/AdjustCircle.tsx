import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAdjustCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 7A7.74 7.74 0 107 17 7.74 7.74 0 1017 7zm-1.6 1.6a6.12 6.12 0 01.11 1.14 5.92 5.92 0 01-.16 1.34l-2.44-2.42a5.92 5.92 0 011.34-.16 6.12 6.12 0 011.14.11zm-.94 4.4A6 6 0 0113 14.46L9.54 11A6 6 0 0111 9.54zm-8 1.46a5.75 5.75 0 118-8h-.25a7.76 7.76 0 00-7.71 7.79c0 .08.01.17.01.25zm2.1.89a6.12 6.12 0 01-.11-1.14 5.92 5.92 0 01.16-1.34l2.43 2.43a5.92 5.92 0 01-1.34.16 6.12 6.12 0 01-1.09-.07zM14.25 20a5.77 5.77 0 01-4.75-2.51h.25a7.76 7.76 0 007.75-7.74V9.5A5.75 5.75 0 0114.25 20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAdjustCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
