import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSwimmer(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 9.28a2 2 0 10-2-2 2 2 0 002 2zM2.71 13.92a3 3 0 01.57.25 4.06 4.06 0 004.1 0 2.62 2.62 0 012.56 0l.21.1a4.14 4.14 0 003.87-.13 2.62 2.62 0 012.56 0 4.25 4.25 0 002.08.56 4 4 0 002-.56 3 3 0 01.57-.25 1 1 0 10-.52-1.89 4.82 4.82 0 00-1 .44 2.1 2.1 0 01-2.1 0 4.62 4.62 0 00-4.54 0 2.52 2.52 0 01-.29.12L14.34 11a.75.75 0 00.09-.15 1 1 0 00.12-.16 1.29 1.29 0 000-.19 1.06 1.06 0 000-.19 1.13 1.13 0 000-.18 1.06 1.06 0 000-.19 1.51 1.51 0 00-.1-.17.7.7 0 00-.1-.16l-3.07-3.33a1.1 1.1 0 00-.28-.22.8.8 0 00-.21 0 .53.53 0 00-.17 0A.89.89 0 0010.2 6L6.66 7.32a1 1 0 00-.6 1.28 1 1 0 001.28.6l2.93-1.07 2 2.12-1.9 1.9a4.62 4.62 0 00-3.94.28 2.1 2.1 0 01-2.1 0 4.82 4.82 0 00-1-.44 1 1 0 10-.58 1.91zm18 3.09a4.82 4.82 0 00-1 .44 2.1 2.1 0 01-2.1 0 4.62 4.62 0 00-4.54 0 2.11 2.11 0 01-2.12 0 4.62 4.62 0 00-4.54 0 2.1 2.1 0 01-2.1 0 4.82 4.82 0 00-1-.44 1 1 0 10-.58 1.91 3 3 0 01.57.25 4.06 4.06 0 004.1 0 2.62 2.62 0 012.56 0 4.15 4.15 0 004.12 0 2.62 2.62 0 012.56 0 4.25 4.25 0 002.08.56 4 4 0 002-.56 3 3 0 01.57-.25 1 1 0 10-.58-1.92z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSwimmer);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;