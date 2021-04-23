import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCropAltRotateRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 4h-.59l.3-.29a1 1 0 10-1.42-1.42l-2 2a1 1 0 000 1.42l2 2a1 1 0 001.42 0 1 1 0 000-1.42l-.3-.29H16a3 3 0 013 3v2a1 1 0 002 0V9a5 5 0 00-5-5zm0 14h-1v-7a1 1 0 00-1-1H7V9a1 1 0 00-2 0v1H4a1 1 0 000 2h1v7a1 1 0 001 1h7v1a1 1 0 002 0v-1h1a1 1 0 000-2zm-3 0H7v-6h6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCropAltRotateRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;