import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgRedo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 11a1 1 0 00-1 1 8.05 8.05 0 11-2.22-5.5h-2.4a1 1 0 000 2h4.53a1 1 0 001-1V3a1 1 0 00-2 0v1.77A10 10 0 1022 12a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRedo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
