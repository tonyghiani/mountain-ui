import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBasketball(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M12 2a10 10 0 00-8.4 4.59 10 10 0 0014.66 13.2A10 10 0 0012 2zm2 2.26A8 8 0 0119.74 10 9.78 9.78 0 0015 11.38a15.7 15.7 0 00-2.4-2.21A10.06 10.06 0 0014 4.26zM12 4a7.9 7.9 0 01-1.14 4.07c-.15-.08-.29-.17-.44-.24a15.52 15.52 0 00-4.09-1.47A8 8 0 0112 4zM5 8.16A13.75 13.75 0 019.49 9.6l.13.08A7.93 7.93 0 014 12a8 8 0 011-3.84zm5 11.58A8 8 0 014.26 14a9.9 9.9 0 007.08-3.21 14 14 0 012 1.8A10 10 0 0010 19.74zm2 .26a8 8 0 012.56-5.85c.06.08.12.15.17.23a14 14 0 011.84 4.18A7.93 7.93 0 0112 20zm6.21-3a16 16 0 00-1.8-3.75L16.2 13a7.93 7.93 0 013.8-1 8 8 0 01-1.79 5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBasketball);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;