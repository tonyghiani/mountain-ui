import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCompress(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 9h5a1 1 0 000-2h-4V3a1 1 0 00-2 0v5a1 1 0 001 1zm-8 6H3a1 1 0 000 2h4v4a1 1 0 002 0v-5a1 1 0 00-1-1zM8 2a1 1 0 00-1 1v4H3a1 1 0 000 2h5a1 1 0 001-1V3a1 1 0 00-1-1zm13 13h-5a1 1 0 00-1 1v5a1 1 0 002 0v-4h4a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCompress);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
