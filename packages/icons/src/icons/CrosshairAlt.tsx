import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCrosshairAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 11a1 1 0 101 1 1 1 0 00-1-1zm0-9a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V17a1 1 0 00-2 0v2.93A8 8 0 014.07 13H7a1 1 0 000-2H4.07A8 8 0 0111 4.07V7a1 1 0 002 0V4.07A8 8 0 0119.93 11H17a1 1 0 000 2h2.93A8 8 0 0113 19.93z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCrosshairAlt);
export default ForwardRef;
