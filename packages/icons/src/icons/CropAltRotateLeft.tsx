import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCropAltRotateLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.71 16.29a1 1 0 00-1.42 1.42l.3.29H8a3 3 0 01-3-3v-2a1 1 0 00-2 0v2a5 5 0 005 5h.59l-.3.29a1 1 0 000 1.42 1 1 0 001.42 0l2-2a1 1 0 000-1.42zM20 12h-1V5a1 1 0 00-1-1h-7V3a1 1 0 00-2 0v1H8a1 1 0 000 2h1v7a1 1 0 001 1h7v1a1 1 0 002 0v-1h1a1 1 0 000-2zm-3 0h-6V6h6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCropAltRotateLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
