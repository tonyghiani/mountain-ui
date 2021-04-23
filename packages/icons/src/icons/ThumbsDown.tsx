import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgThumbsDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H6.27a3 3 0 00-2.95 2.46l-1.27 7A3 3 0 005 15h4.56L9 16.43A4.13 4.13 0 0012.89 22a1 1 0 00.91-.59L16.65 15H19a3 3 0 003-3V5a3 3 0 00-3-3zm-4 11.79l-2.72 6.12a2.13 2.13 0 01-1.38-2.78l.53-1.43A2 2 0 009.56 13H5a1 1 0 01-.77-.36 1 1 0 01-.23-.82l1.27-7a1 1 0 011-.82H15zM20 12a1 1 0 01-1 1h-2V4h2a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgThumbsDown);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;