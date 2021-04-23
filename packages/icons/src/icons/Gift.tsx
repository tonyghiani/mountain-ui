import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGift(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 7h-.35A3.45 3.45 0 0018 5.5a3.49 3.49 0 00-6-2.44A3.49 3.49 0 006 5.5 3.45 3.45 0 006.35 7H6a3 3 0 00-3 3v2a1 1 0 001 1h1v6a3 3 0 003 3h8a3 3 0 003-3v-6h1a1 1 0 001-1v-2a3 3 0 00-3-3zm-7 13H8a1 1 0 01-1-1v-6h4zm0-9H5v-1a1 1 0 011-1h5zm0-4H9.5A1.5 1.5 0 1111 5.5zm2-1.5A1.5 1.5 0 1114.5 7H13zM17 19a1 1 0 01-1 1h-3v-7h4zm2-8h-6V9h5a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGift);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
