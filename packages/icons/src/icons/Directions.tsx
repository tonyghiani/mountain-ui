import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgDirections(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.12 9.88l-7-7a3.08 3.08 0 00-4.24 0l-7 7a3 3 0 000 4.24l7 7a3 3 0 004.24 0l7-7a3 3 0 000-4.24zm-1.41 2.83l-7 7a1 1 0 01-1.42 0l-7-7a1 1 0 010-1.42l7-7a1 1 0 011.42 0l7 7a1 1 0 010 1.42zm-5.5-3.42a1 1 0 00-1.42 1.42l.3.29H9.5a1 1 0 00-1 1v2a1 1 0 002 0v-1h2.59l-.3.29a1 1 0 000 1.42 1 1 0 001.42 0l2-2a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDirections);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
