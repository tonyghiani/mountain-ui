import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTriangle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.87 19.29l-9-15.58a1 1 0 00-1.74 0l-9 15.58a1 1 0 000 1 1 1 0 00.87.5h18a1 1 0 00.87-.5 1 1 0 000-1zm-17.14-.5L12 6.21l7.27 12.58z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTriangle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
