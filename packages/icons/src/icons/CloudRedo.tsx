import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudRedo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 12.5a1 1 0 00-.91.6 4 4 0 10.55 6.4 1 1 0 10-1.32-1.5 2 2 0 01-1.32.5 2 2 0 111-3.75h-.22a1 1 0 000 2H15a1 1 0 001-1V13.5a1 1 0 00-1-1zm3.42-4.78A7 7 0 005.06 9.61a4 4 0 00-.38 7.66 1.13 1.13 0 00.32.05 1 1 0 00.32-2A2 2 0 014 13.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1 1 0 101 1.74A5 5 0 0022 12.5a5 5 0 00-3.58-4.78z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudRedo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
