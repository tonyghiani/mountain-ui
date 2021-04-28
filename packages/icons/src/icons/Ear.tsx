import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEar(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M12 8a1 1 0 011 1 1 1 0 002 0 3 3 0 10-5.018 2.22c.01.01.162.17.194.216a.988.988 0 010 1.119 1 1 0 101.648 1.13 2.983 2.983 0 00-.005-3.388 7.124 7.124 0 00-.49-.557 1.055 1.055 0 01-.16-.181A1 1 0 0112 8zm0-6a7 7 0 00-6.762 8.812 1 1 0 001.932-.518A5 5 0 1117 9a5.114 5.114 0 01-.705 2.567L12.73 19A2.005 2.005 0 0111 20a2.027 2.027 0 01-2-2 1.992 1.992 0 01.269-.999 1 1 0 00-1.733-1.002 3.999 3.999 0 106.963 3.934l3.563-7.433A7 7 0 0012 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEar);
export default ForwardRef;
