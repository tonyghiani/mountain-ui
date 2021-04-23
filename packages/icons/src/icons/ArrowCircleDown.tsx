import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowCircleDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 15.71a1 1 0 00.33.21 1 1 0 00.76 0 1 1 0 00.33-.21l3-3a1 1 0 00-1.42-1.42L13 12.59V9a1 1 0 00-2 0v3.59l-1.29-1.3a1 1 0 00-1.42 0 1 1 0 000 1.42zM12 22A10 10 0 102 12a10 10 0 0010 10zm0-18a8 8 0 11-8 8 8 8 0 018-8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowCircleDown);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
