import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPlug(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6h-3V3a1 1 0 00-2 0v3h-4V3a1 1 0 00-2 0v3H5a1 1 0 000 2h1v5a1 1 0 00.29.71L9 16.41V21a1 1 0 002 0v-4h2v4a1 1 0 002 0v-4.59l2.71-2.7A1 1 0 0018 13V8h1a1 1 0 000-2zm-3 6.59L13.59 15h-3.18L8 12.59V8h8zM11 13h2a1 1 0 000-2h-2a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPlug);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;