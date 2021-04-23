import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFilter(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a3 3 0 00-3 3v1.17a3 3 0 00.25 1.2v.06a2.81 2.81 0 00.59.86L9 14.41V21a1 1 0 00.47.85A1 1 0 0010 22a1 1 0 00.45-.11l4-2A1 1 0 0015 19v-4.59l6.12-6.12a2.81 2.81 0 00.59-.86v-.06a3 3 0 00.29-1.2V5a3 3 0 00-3-3zm-5.71 11.29A1 1 0 0013 14v4.38l-2 1V14a1 1 0 00-.29-.71L5.41 8h13.18zM20 6H4V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFilter);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;