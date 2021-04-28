import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPercentage(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.758 10.758a3 3 0 10-3-3 3.003 3.003 0 003 3zm0-4a1 1 0 11-1 1 1 1 0 011-1zm8.484 6.484a3 3 0 103 3 3.003 3.003 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm3.465-12.949a1 1 0 00-1.414 0l-14 14a1 1 0 101.414 1.414l14-14a1 1 0 000-1.414z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPercentage);
export default ForwardRef;
