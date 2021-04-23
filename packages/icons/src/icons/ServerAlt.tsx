import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgServerAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 17a1 1 0 101 1 1 1 0 00-1-1zm0-6a1 1 0 101 1 1 1 0 00-1-1zm0-6a1 1 0 101 1 1 1 0 00-1-1zm12 0a3 3 0 00-3-3H7a3 3 0 00-3 3v2a3 3 0 00.78 2A3 3 0 004 11v2a3 3 0 00.78 2A3 3 0 004 17v2a3 3 0 003 3h10a3 3 0 003-3v-2a3 3 0 00-.78-2 3 3 0 00.78-2v-2a3 3 0 00-.78-2A3 3 0 0020 7zm-2 14a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1h10a1 1 0 011 1zm0-6a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1h10a1 1 0 011 1zm0-6a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgServerAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
