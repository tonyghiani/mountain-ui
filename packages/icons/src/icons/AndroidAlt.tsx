import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAndroidAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2.992 9a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm18 0a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm-4.135-5.5a1 1 0 10-1.731-1l-.614 1.063a5.928 5.928 0 00-5.04 0L8.857 2.5a1 1 0 10-1.731 1l.692 1.198A5.979 5.979 0 005.992 9v8a1 1 0 001 1h2v3a1 1 0 002 0v-3h2v3a1 1 0 002 0v-3h2a1 1 0 001-1V9a5.979 5.979 0 00-1.827-4.302zM15.992 16h-8v-5h8zm-8-7a4 4 0 018 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAndroidAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
