import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageLock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 5.18V4a3 3 0 00-6 0v1.18A3 3 0 0012 8v2a3 3 0 003 3h4a3 3 0 003-3V8a3 3 0 00-2-2.82zM16 4a1 1 0 012 0v1h-2zm4 6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8a1 1 0 011-1h4a1 1 0 011 1zm-1 5a1 1 0 00-1 1v3a.89.89 0 01-.18.53l-8.41-8.41a2.86 2.86 0 00-3.93 0L4 12.6V7a1 1 0 011-1h5a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-3a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0L15.46 20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageLock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;