import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLottiefiles(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 6c-2.8 0-4.4 2.8-5.9 5.5C9.9 13.8 8.7 16 7 16c-.6 0-1 .4-1 1s.4 1 1 1c2.8 0 4.4-2.8 5.9-5.5C14.1 10.2 15.3 8 17 8c.6 0 1-.4 1-1s-.4-1-1-1zm2-4H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLottiefiles);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;