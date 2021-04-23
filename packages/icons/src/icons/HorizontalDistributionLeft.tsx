import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHorizontalDistributionLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11 4H6V3a1 1 0 00-2 0v18a1 1 0 002 0v-1h5a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H6V6h4zm9-13h-3V3a1 1 0 00-2 0v18a1 1 0 002 0v-2h3a1 1 0 001-1V6a1 1 0 00-1-1zm-1 12h-2V7h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHorizontalDistributionLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
