import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgMoonEclipse(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 00-2.14.24h-.12a10 10 0 00-.1 19.44h.14A9.57 9.57 0 0012 22a10 10 0 000-20zm-2 17.74a8 8 0 010-15.48 8 8 0 010 15.48zm4.53-.16a10 10 0 000-15.16 8 8 0 010 15.16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMoonEclipse);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
