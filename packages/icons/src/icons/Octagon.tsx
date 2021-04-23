import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgOctagon(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 7.57l-5.27-5.28a1.05 1.05 0 00-.71-.29H8.27a1.05 1.05 0 00-.71.29L2.29 7.57a1 1 0 00-.29.7v7.46a1 1 0 00.29.7l5.27 5.28a1.05 1.05 0 00.71.29h7.46a1.05 1.05 0 00.71-.29l5.27-5.28a1 1 0 00.29-.7V8.27a1 1 0 00-.29-.7zM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgOctagon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
