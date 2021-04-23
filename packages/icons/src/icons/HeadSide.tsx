import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHeadSide(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.23 2.003a7.372 7.372 0 00-5.453 2.114A7.44 7.44 0 005.5 9.5v.03l-1.904 4.044A1 1 0 004.5 15h1v2a2.002 2.002 0 002 2h1v2a1 1 0 002 0v-2a1 1 0 000-2h-3v-3a1 1 0 00-1-1h-.424l1.34-2.844a.99.99 0 00.095-.465L7.5 9.5a5.455 5.455 0 011.67-3.947 5.527 5.527 0 014-1.55 5.685 5.685 0 015.33 5.77l-1.967 7.504a1.01 1.01 0 00.006.534l1 3.466A1.001 1.001 0 0018.5 22a1.018 1.018 0 00.277-.04 1 1 0 00.684-1.237l-.924-3.2 1.93-7.267A1.031 1.031 0 0020.5 10v-.228a7.698 7.698 0 00-7.27-7.769z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeadSide);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;