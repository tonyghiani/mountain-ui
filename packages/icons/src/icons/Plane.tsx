import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPlane(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.75 12a1 1 0 00-.55-.89l-6.12-3.06v-4a3.08 3.08 0 10-6.16 0v4L2.8 11.11a1 1 0 00-.55.89v3.33a1 1 0 00.43.83 1 1 0 00.92.11l5.32-2V18l-1.82.6a1 1 0 00-.68.95V22a1 1 0 00.3.71 1 1 0 00.7.29h9.17a1 1 0 001-1v-2.5a1 1 0 00-.68-.95L15.08 18v-3.72l5.32 2a1 1 0 00.92-.11 1 1 0 00.43-.83zm-7.31-.1a1 1 0 00-.93.11 1 1 0 00-.43.82v5.84a1 1 0 00.69.95l1.81.6V21H8.41v-.78l1.81-.6a1 1 0 00.69-.95v-5.84a1 1 0 00-.43-.82 1 1 0 00-.93-.11l-5.31 2v-1.28l6.11-3.06a1 1 0 00.56-.89V4.08a1.08 1.08 0 112.16 0v4.59a1 1 0 00.56.89l6.11 3.06v1.27z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPlane);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;