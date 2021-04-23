import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageShare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 7a2 2 0 00-1.18.39l-1.75-.8L19 5.71A2 2 0 0020 6a2 2 0 10-2-2l-1.89.87A2 2 0 1015 8.5a1.88 1.88 0 00.92-.24l2.1 1A2 2 0 1020 7zm-1 6a1 1 0 00-1 1v.39l-1.48-1.48a2.77 2.77 0 00-3.93 0l-.7.7-2.48-2.49a2.79 2.79 0 00-3.93 0L4 12.6V7a1 1 0 011-1h5a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.29 4.3zm13-1a.89.89 0 01-.18.53L13.31 15l.7-.7a.78.78 0 011.1 0L18 17.22z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageShare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;