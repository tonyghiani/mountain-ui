import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUpload(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.71 7.71L11 5.41V15a1 1 0 002 0V5.41l2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42l-4-4a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-4 4a1 1 0 101.42 1.42zM21 12a1 1 0 00-1 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a1 1 0 00-2 0v6a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUpload);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;