import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImages(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 15V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3zM4 5a1 1 0 011-1h10a1 1 0 011 1v4.36l-1.08-1.09a2.56 2.56 0 00-1.81-.75 2.58 2.58 0 00-1.81.75l-.91.91-.81-.81a2.93 2.93 0 00-4.11 0L4 9.85zm.12 10.45A.94.94 0 014 15v-2.33l2.88-2.88a.91.91 0 011.29 0l.83.81zm8.6-5.76a.52.52 0 01.39-.17.52.52 0 01.39.17l2.5 2.49V15a1 1 0 01-1 1H6.4zM21 6a1 1 0 00-1 1v10a3 3 0 01-3 3H7a1 1 0 000 2h10a5 5 0 005-5V7a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImages);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;