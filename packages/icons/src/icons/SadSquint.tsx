import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSadSquint(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.08 12.21l1.5-1.5a1 1 0 000-1.42l-1.5-1.5a1 1 0 00-1.42 1.42l.8.79-.8.79a1 1 0 000 1.42 1 1 0 00.71.29 1 1 0 00.71-.29zm-.72 3.12a1 1 0 00-.13 1.4 1 1 0 001.41.13 3.76 3.76 0 014.72 0 1 1 0 001.41-.13 1 1 0 00-.13-1.4 5.81 5.81 0 00-7.28 0zm8.22-7.54a1 1 0 00-1.42 0l-1.5 1.5a1 1 0 000 1.42l1.5 1.5a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42l-.79-.79.79-.79a1 1 0 000-1.42zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSadSquint);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
