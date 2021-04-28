import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSkipForward(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 3a3 3 0 00-3 3v2.84L7 3.47a3.21 3.21 0 00-3.29 0A3.38 3.38 0 002 6.42v11.16a3.38 3.38 0 001.72 3 3.24 3.24 0 001.61.42A3.28 3.28 0 007 20.53l9-5.37V18a3 3 0 006 0V6a3 3 0 00-3-3zm-3.68 10.23L6 18.81a1.23 1.23 0 01-1.28 0A1.4 1.4 0 014 17.58V6.42a1.4 1.4 0 01.71-1.25A1.29 1.29 0 015.33 5a1.23 1.23 0 01.67.19l9.33 5.58a1.45 1.45 0 010 2.46zM20 18a1 1 0 01-2 0V6a1 1 0 012 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSkipForward);
export default ForwardRef;
