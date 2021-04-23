import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDesktopAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h3v2H5a1 1 0 000 2h14a1 1 0 000-2h-3v-2h3a3 3 0 003-3V5a3 3 0 00-3-3zm-5 18h-4v-2h4zm6-5a1 1 0 01-1 1H5a1 1 0 01-1-1v-1h16zm0-3H4V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDesktopAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;