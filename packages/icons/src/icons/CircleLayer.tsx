import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCircleLayer(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 2a7 7 0 00-6.88 5.74A6 6 0 005 12.41 5 5 0 1011.59 19a6 6 0 004.67-3.09A7 7 0 0015 2zm-5 15.43c0 .1 0 .2-.07.31a3 3 0 11-3.64-3.64l.28-.1A2.94 2.94 0 0110 17.43zm5-3.67a1.8 1.8 0 01-.05.19 3.74 3.74 0 01-.17.54 4 4 0 01-2.7 2.4c0-.18 0-.35-.06-.53s0-.27 0-.4-.12-.38-.18-.57-.07-.24-.12-.36a4.21 4.21 0 00-.3-.55c0-.09-.09-.19-.15-.28a5.3 5.3 0 00-.6-.73l-.2-.17a5.52 5.52 0 00-.53-.43 2.9 2.9 0 00-.34-.19 4 4 0 00-.5-.27 2.34 2.34 0 00-.4-.13 3.13 3.13 0 00-.52-.16c-.14 0-.29 0-.44-.06L7.13 12a4 4 0 012.39-2.7 3.27 3.27 0 01.53-.17l.2-.05A3.74 3.74 0 0111 9a4 4 0 014 4 3.84 3.84 0 01-.08.76zm2-.16V13a6 6 0 00-6-6h-.6a5 5 0 116.6 6.6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCircleLayer);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;