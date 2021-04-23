import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgXAdd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M14.71 7.29a1 1 0 00-1.42 0L11 9.59l-2.29-2.3a1 1 0 10-1.42 1.42L9.59 11l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l2.29-2.3 2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42L12.41 11l2.3-2.29a1 1 0 000-1.42zM7 18a3 3 0 01-3-3V7a3 3 0 013-3 1 1 0 000-2 5 5 0 00-5 5v8a5 5 0 005 5 1 1 0 000-2zM18 7v6a1 1 0 002 0V7a5 5 0 00-5-5 1 1 0 000 2 3 3 0 013 3zm3 11h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgXAdd);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
