import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHospitalSymbol(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 7a1 1 0 00-1 1v3h-4V8a1 1 0 00-2 0v8a1 1 0 002 0v-3h4v3a1 1 0 002 0V8a1 1 0 00-1-1zm-3-5a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.01 8.01 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHospitalSymbol);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
