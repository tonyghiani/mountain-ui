import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCornerRightDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 13.35a1 1 0 00-1.42 0l-2.92 2.92v-8a4 4 0 00-4-4H3a1 1 0 100 2h10.37a2 2 0 012 2v8l-2.92-2.92A1 1 0 0011 14.76l4.62 4.63a1.19 1.19 0 00.33.22.94.94 0 00.76 0 1 1 0 00.33-.22l4.63-4.63a1 1 0 00.04-1.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCornerRightDown);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;