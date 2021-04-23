import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCornerUpRightAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.92 10.12a1 1 0 00-.21-.33l-3-3a1 1 0 10-1.42 1.42l1.3 1.29H7a3 3 0 00-3 3v4a1 1 0 002 0v-4a1 1 0 011-1h9.59l-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l3-3a1 1 0 00.21-.33 1 1 0 000-.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCornerUpRightAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
