import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCompressV(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.71 13.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1 1 0 001.42 1.42l.79-.8V21a1 1 0 002 0v-4.59l.79.8a1 1 0 001.42 0 1 1 0 000-1.42zm-1.42-2.58a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1 1 0 10-1.42-1.42l-.79.8V3a1 1 0 00-2 0v4.59l-.79-.8a1 1 0 10-1.42 1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCompressV);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
