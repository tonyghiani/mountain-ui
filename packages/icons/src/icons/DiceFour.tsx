import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDiceFour(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 14a1 1 0 101 1 1 1 0 00-1-1zM9 8a1 1 0 101 1 1 1 0 00-1-1zm0 6a1 1 0 101 1 1 1 0 00-1-1zm6-6a1 1 0 101 1 1 1 0 00-1-1zm2-6H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zm3 15a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10a3 3 0 013 3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDiceFour);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;