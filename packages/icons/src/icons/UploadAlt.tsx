import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUploadAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.71 6.71L11 5.41V17a1 1 0 002 0V5.41l1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42l-3-3a1 1 0 00-1.42 0l-3 3a1 1 0 001.42 1.42zM18 9h-2a1 1 0 000 2h2a1 1 0 011 1v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7a1 1 0 011-1h2a1 1 0 000-2H6a3 3 0 00-3 3v7a3 3 0 003 3h12a3 3 0 003-3v-7a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUploadAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
