import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileLockAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 20H5a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h4a1 1 0 00.92-.62 1 1 0 00-.21-1.09l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0l-.28-.1H5a3 3 0 00-3 3v14a3 3 0 003 3h5a1 1 0 000-2zm2-14.59L14.59 8H13a1 1 0 01-1-1zM13 13a1 1 0 00-1-1H7a1 1 0 000 2h5a1 1 0 001-1zm-6-3h1a1 1 0 000-2H7a1 1 0 000 2zm0 6a1 1 0 000 2h2a1 1 0 000-2zm13-.82V15a3 3 0 00-6 0v.18A3 3 0 0012 18v1a3 3 0 003 3h4a3 3 0 003-3v-1a3 3 0 00-2-2.82zM17 14a1 1 0 011 1h-2a1 1 0 011-1zm3 5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1a1 1 0 011-1h4a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileLockAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;