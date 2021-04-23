import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSquint(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 14H9a1 1 0 000 2h6a1 1 0 000-2zm-5.92-1.79l1.5-1.5a1 1 0 000-1.42l-1.5-1.5a1 1 0 00-1.42 1.42l.8.79-.8.79a1 1 0 000 1.42 1 1 0 00.71.29 1 1 0 00.71-.29zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4.58-12.21a1 1 0 00-1.42 0l-1.5 1.5a1 1 0 000 1.42l1.5 1.5a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42l-.79-.79.79-.79a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSquint);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
