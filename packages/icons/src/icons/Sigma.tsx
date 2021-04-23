import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgSigma(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 16h-5.59l3.3-3.29a1 1 0 000-1.42L10.41 8H16a1 1 0 000-2H8a1 1 0 00-.92.62 1 1 0 00.21 1.09l4.3 4.29-4.3 4.29a1 1 0 00-.21 1.09A1 1 0 008 18h8a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSigma);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
