import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFolderLock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M4 4h4.56a1 1 0 01.95.68l.54 1.64A1 1 0 0011 7h7a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-6.28l-.32-1a3 3 0 00-2.84-2H4a3 3 0 00-3 3v13a3 3 0 003 3h6a1 1 0 000-2H4a1 1 0 01-1-1V5a1 1 0 011-1zm17 11.18V14a3 3 0 00-6 0v1.18A3 3 0 0013 18v2a3 3 0 003 3h4a3 3 0 003-3v-2a3 3 0 00-2-2.82zM17 14a1 1 0 012 0v1h-2zm4 6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFolderLock);
export default ForwardRef;
