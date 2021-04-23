import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudExclamation(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.71 18.79a1.15 1.15 0 00-.33-.21 1 1 0 00-1.09.21 1.05 1.05 0 00-.29.71 1 1 0 00.29.71 1.15 1.15 0 00.33.21 1 1 0 001.3-1.3 1 1 0 00-.21-.33zM12 12.5a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm6.42-4.79a7 7 0 00-13.36 1.9A4 4 0 006 17.5h2a1 1 0 000-2H6a2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66A3 3 0 0117 15.5h-1a1 1 0 000 2h1a5 5 0 001.42-9.79z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudExclamation);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;