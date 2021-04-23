import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBoltAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.89 9.55A1 1 0 0019 9h-5V3a1 1 0 00-.69-1 1 1 0 00-1.12.36l-8 11a1 1 0 00-.08 1A1 1 0 005 15h5v6a1 1 0 00.69.95A1.12 1.12 0 0011 22a1 1 0 00.81-.41l8-11a1 1 0 00.08-1.04zM12 17.92V14a1 1 0 00-1-1H7l5-6.92V10a1 1 0 001 1h4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBoltAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
