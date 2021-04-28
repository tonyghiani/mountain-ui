import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgExpandFromCorner(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 12H3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1zm-1 8H4v-6h6zM21.92 2.62a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 000 2h3.59l-5.3 5.29a1 1 0 000 1.42 1 1 0 001.42 0L20 5.41V9a1 1 0 002 0V3a1 1 0 00-.08-.38z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgExpandFromCorner);
export default ForwardRef;
