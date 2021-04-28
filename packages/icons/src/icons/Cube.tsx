import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCube(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.47 7.37v-.08l-.06-.15a.71.71 0 00-.07-.09.94.94 0 00-.09-.12l-.09-.07-.16-.08-7.5-4.63a1 1 0 00-1.06 0L4 6.78l-.09.08-.09.07a.94.94 0 00-.09.12.71.71 0 00-.07.09l-.06.15v.08a1.15 1.15 0 000 .26v8.74a1 1 0 00.47.85l7.5 4.63a.47.47 0 00.15.06h.08a.86.86 0 00.52 0h.08a.47.47 0 00.15-.06L20 17.22a1 1 0 00.47-.85V7.63a1.15 1.15 0 000-.26zM11 19.21l-5.5-3.4V9.43l5.5 3.39zm1-8.12L6.4 7.63 12 4.18l5.6 3.45zm6.5 4.72l-5.5 3.4v-6.39l5.5-3.39z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCube);
export default ForwardRef;
