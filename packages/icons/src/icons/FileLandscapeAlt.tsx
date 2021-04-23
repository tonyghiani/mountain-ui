import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileLandscapeAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 10.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.1a1.1 1.1 0 00-.31-.11H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-6-.06zm-6-3.53L18.59 10H17a1 1 0 01-1-1zM20 17a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h9v3a3 3 0 003 3h3zM7 12h4a1 1 0 000-2H7a1 1 0 000 2zm0 2a1 1 0 000 2h10a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileLandscapeAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
