import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgClipboardBlank(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 4h-1a2 2 0 00-2-2h-4a2 2 0 00-2 2H7a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-7 0h4v2h-4V4zm8 15a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h1a2 2 0 002 2h4a2 2 0 002-2h1a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgClipboardBlank);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
