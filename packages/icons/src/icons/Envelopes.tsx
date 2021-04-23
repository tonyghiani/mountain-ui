import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelopes(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 21.63H5a3 3 0 01-3-3v-8a1 1 0 00-2 0v8a5 5 0 005 5h12a1 1 0 000-2zm4-18H7a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm-.41 2l-5.88 5.88a1 1 0 01-1.42 0L7.41 5.63zm1.41 11a1 1 0 01-1 1H7a1 1 0 01-1-1V7l5.88 5.88a3 3 0 004.24 0L22 7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopes);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
