import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMusic(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.65 2.24a1 1 0 00-.8-.23l-13 2A1 1 0 007 5v10.35A3.45 3.45 0 005.5 15 3.5 3.5 0 109 18.5v-7.64l11-1.69v4.18a3.45 3.45 0 00-1.5-.35 3.5 3.5 0 103.5 3.5V3a1 1 0 00-.35-.76zM5.5 20A1.5 1.5 0 117 18.5 1.5 1.5 0 015.5 20zm13-2a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zM20 7.14L9 8.83v-3l11-1.66z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMusic);
export default ForwardRef;
