import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHeartbeat(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 10.41h-2.5a1 1 0 00-.71.3L16.55 12l-2.8-3.19a1 1 0 00-1.46 0l-1.7 1.7H9a1 1 0 000 2h2a1 1 0 00.71-.29L13 10.88l2.8 3.19a1 1 0 00.72.34 1 1 0 00.71-.29l1.7-1.71H21a1 1 0 000-2zm-7.39 5.3l-1.9 1.9a1 1 0 01-1.42 0L5.08 12.4a3.69 3.69 0 010-5.22 3.69 3.69 0 015.21 0 1 1 0 001.42 0 3.78 3.78 0 015.21 0 3.94 3.94 0 01.58.75 1 1 0 001.72-1 6 6 0 00-.88-1.13A5.68 5.68 0 0011 5.17a5.68 5.68 0 00-9 4.62 5.62 5.62 0 001.67 4L8.88 19a3 3 0 004.24 0L15 17.12a1 1 0 000-1.41 1 1 0 00-1.39 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeartbeat);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;