import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSimCard(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 3.5H7A3.5 3.5 0 003.5 7v10A3.5 3.5 0 007 20.5h10a3.5 3.5 0 003.5-3.5V7A3.5 3.5 0 0017 3.5zm-6.5 2h3v3h-3zm-2 13H7A1.5 1.5 0 015.5 17v-1.5h3zm5 0h-3v-3h3zm5-1.5a1.5 1.5 0 01-1.5 1.5h-1.5v-3h3zm0-3.5h-13V7A1.5 1.5 0 017 5.5h1.5v4a1 1 0 001 1h9zm0-5h-3v-3H17A1.5 1.5 0 0118.5 7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSimCard);
export default ForwardRef;
