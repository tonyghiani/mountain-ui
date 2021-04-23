import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAlignCenterV(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.21 6.21l.79-.8V8a1 1 0 002 0V5.41l.79.8a1 1 0 001.42 0 1 1 0 000-1.42l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1 1 0 001.42 1.42zM16 11H8a1 1 0 000 2h8a1 1 0 000-2zm-2.21 6.79l-.79.8V16a1 1 0 00-2 0v2.59l-.79-.8a1 1 0 00-1.42 1.42l2.5 2.5a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1 1 0 00-1.42-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAlignCenterV);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;