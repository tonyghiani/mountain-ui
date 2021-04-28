import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGlassMartini(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 20h-5v-5.06A9 9 0 0021 6a8.72 8.72 0 00-.67-3.39 1 1 0 00-.22-.32L20 2.21a.92.92 0 00-.21-.13.94.94 0 00-.28-.08H4.5a.94.94 0 00-.29.06A2.12 2.12 0 004 2.2l-.12.09a1 1 0 00-.22.32A8.72 8.72 0 003 6a9 9 0 008 8.94V20H6a1 1 0 000 2h12a1 1 0 000-2zM5 6a6.91 6.91 0 01.29-2h13.42A6.91 6.91 0 0119 6 7 7 0 015 6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGlassMartini);
export default ForwardRef;
