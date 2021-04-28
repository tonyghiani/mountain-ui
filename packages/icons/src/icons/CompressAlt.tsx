import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCompressAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 2.29a1 1 0 00-1.42 0l-5.79 5.8V6.5a1 1 0 00-2 0v4a1 1 0 00.08.38 1 1 0 00.54.54 1 1 0 00.38.08h4a1 1 0 000-2h-1.59l5.8-5.79a1 1 0 000-1.42zM10.88 12.58a1 1 0 00-.38-.08h-4a1 1 0 000 2h1.59l-5.8 5.79a1 1 0 000 1.42 1 1 0 001.42 0l5.79-5.8v1.59a1 1 0 002 0v-4a1 1 0 00-.08-.38 1 1 0 00-.54-.54z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCompressAlt);
export default ForwardRef;
