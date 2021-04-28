import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImageBlock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.54 2.46A5 5 0 1022 6a5 5 0 00-1.46-3.54zM14 6a3 3 0 013-3 3 3 0 011.29.3l-4 4A3 3 0 0114 6zm5.12 2.12a3.08 3.08 0 01-3.4.57l4-4A3 3 0 0120 6a3 3 0 01-.88 2.12zM19 13a1 1 0 00-1 1v.39l-1.48-1.49a2.87 2.87 0 00-3.93 0l-.7.71-2.48-2.49a2.87 2.87 0 00-3.93 0L4 12.61V7a1 1 0 011-1h4a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 00.95-.17h.09A3 3 0 0020 19.44a1.43 1.43 0 000-.22V14a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.89a.79.79 0 011.09 0l3.19 3.18L15.46 20zm13-1a1 1 0 01-.18.54L13.3 15l.71-.7a.79.79 0 011.09 0l2.9 2.91z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImageBlock);
export default ForwardRef;
