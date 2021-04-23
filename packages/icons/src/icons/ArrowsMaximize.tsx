import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowsMaximize(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 14a1 1 0 00-1 1v3.59L5.41 4H9a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v6a1 1 0 002 0V5.41L18.59 20H15a1 1 0 000 2h6a1 1 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0022 21v-6a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowsMaximize);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
