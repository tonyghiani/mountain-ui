import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWifi(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 15a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm0-8a7.06 7.06 0 00-4.95 2.05 1 1 0 000 1.41 1 1 0 001.41 0 5 5 0 017.08 0 1 1 0 00.7.3 1 1 0 00.76-1.71A7.06 7.06 0 0012 11zm0-4a11.08 11.08 0 00-7.78 3.22 1 1 0 001.42 1.42 9 9 0 0112.72 0 1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42A11.08 11.08 0 0012 7zm10.61.39a15 15 0 00-21.22 0 1 1 0 001.42 1.42 13 13 0 0118.38 0 1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWifi);
export default ForwardRef;
