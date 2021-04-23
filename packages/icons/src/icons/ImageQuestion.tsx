import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 13a1 1 0 00-1 1v.39l-1.48-1.48a2.77 2.77 0 00-3.93 0l-.7.7-2.48-2.49a2.86 2.86 0 00-3.93 0L4 12.6V7a1 1 0 011-1h8a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.29 4.3zm13-1a1 1 0 01-.18.53L13.31 15l.7-.7a.78.78 0 011.1 0L18 17.22zm1-17a3 3 0 00-2.6 1.5 1 1 0 00.37 1.37 1 1 0 001.36-.37A1 1 0 0120 5a1 1 0 01-1 1 1 1 0 000 2 3 3 0 000-6zm.38 7.08A1 1 0 0018.8 9l-.18.06-.18.09-.15.13A1 1 0 0018 10a1 1 0 00.29.71 1 1 0 001.42 0A1 1 0 0020 10a1 1 0 00-.62-.92z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageQuestion);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;