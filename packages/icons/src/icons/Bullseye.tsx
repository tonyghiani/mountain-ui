import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBullseye(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 5a7 7 0 107 7 7 7 0 00-7-7zm0 12a5 5 0 115-5 5 5 0 01-5 5zm0-8a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm0-12a11 11 0 1011 11A11 11 0 0012 1zm0 20a9 9 0 119-9 9 9 0 01-9 9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBullseye);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;