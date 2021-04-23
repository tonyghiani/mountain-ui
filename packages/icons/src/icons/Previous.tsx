import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPrevious(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.41 12l3.3-3.29a1 1 0 10-1.42-1.42l-4 4a1 1 0 000 1.42l4 4a1 1 0 001.42 0 1 1 0 000-1.42zM8 7a1 1 0 00-1 1v8a1 1 0 002 0V8a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPrevious);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
