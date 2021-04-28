import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHorizontalDistributionCenter(
  props: IconPresetProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
        <path d='M19 5h-1V3a1 1 0 00-2 0v2h-1a1 1 0 00-1 1v12a1 1 0 001 1h1v2a1 1 0 002 0v-2h1a1 1 0 001-1V6a1 1 0 00-1-1zm-1 12h-2V7h2zM11 4H9V3a1 1 0 00-2 0v1H5a1 1 0 00-1 1v14a1 1 0 001 1h2v1a1 1 0 002 0v-1h2a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H6V6h4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHorizontalDistributionCenter);
export default ForwardRef;
