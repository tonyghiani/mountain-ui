import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSyncExclamation(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 15.71A1 1 0 0013 15a1.05 1.05 0 00-.29-.71 1 1 0 00-1.09-.21 1 1 0 00-.33.21A1.05 1.05 0 0011 15a1 1 0 00.29.71zm8.62-.2h-4.53a1 1 0 000 2h2.4A8 8 0 014 12a1 1 0 00-2 0 10 10 0 0016.88 7.23V21a1 1 0 002 0v-4.5a1 1 0 00-.97-.99zM12 2a10 10 0 00-6.88 2.77V3a1 1 0 00-2 0v4.5a1 1 0 001 1h4.5a1 1 0 000-2h-2.4A8 8 0 0120 12a1 1 0 002 0A10 10 0 0012 2zm0 11a1 1 0 001-1V9a1 1 0 00-2 0v3a1 1 0 001 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSyncExclamation);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;