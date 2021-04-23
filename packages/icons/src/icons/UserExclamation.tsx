import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUserExclamation(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.55 12.22a4.92 4.92 0 001.7-3.72 5 5 0 00-10 0A4.92 4.92 0 008 12.22a8 8 0 00-4.7 7.28 1 1 0 002 0 6 6 0 0112 0 1 1 0 002 0 8 8 0 00-4.75-7.28zm-3.3-.72a3 3 0 113-3 3 3 0 01-3 3zm8.5-5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zM19 11.79a1.05 1.05 0 00-.29.71 1 1 0 00.29.71 1.15 1.15 0 00.33.21.94.94 0 00.76 0 .9.9 0 00.54-.54.84.84 0 00.08-.38 1 1 0 00-1.71-.71z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUserExclamation);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;