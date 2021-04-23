import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUserTimes(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.3 12.22A4.92 4.92 0 0015 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 002 19.5a1 1 0 002 0 6 6 0 0112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM10 11.5a3 3 0 113-3 3 3 0 01-3 3zm10.91.5l.8-.79a1 1 0 00-1.42-1.42l-.79.8-.79-.8a1 1 0 00-1.42 1.42l.8.79-.8.79a1 1 0 000 1.42 1 1 0 001.42 0l.79-.8.79.8a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUserTimes);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;