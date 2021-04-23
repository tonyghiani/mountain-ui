import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgNavigator(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.17 9.23l-14-5.78a3 3 0 00-4 3.7L3.71 12l-1.58 4.85A3 3 0 002.94 20a3 3 0 002 .8 3 3 0 001.15-.23l14.05-5.78a3 3 0 000-5.54zM5.36 18.7a1 1 0 01-1.06-.19 1 1 0 01-.27-1L5.49 13h13.73zm.13-7.7L4 6.53a1 1 0 01.27-1A1 1 0 015 5.22a1 1 0 01.39.08L19.22 11z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgNavigator);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
