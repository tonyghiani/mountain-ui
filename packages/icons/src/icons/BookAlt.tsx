import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBookAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 2H8a4 4 0 00-4 4v12a4 4 0 004 4h10a2 2 0 002-2V4a2 2 0 00-2-2zM6 6a2 2 0 012-2h10v10H8a3.91 3.91 0 00-2 .56zm2 14a2 2 0 010-4h10v4zm2-12h4a1 1 0 000-2h-4a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBookAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
