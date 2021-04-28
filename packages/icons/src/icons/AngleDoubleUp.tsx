import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAngleDoubleUp(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.71 12.54a1 1 0 00-1.42 0l-3 3A1 1 0 009.71 17L12 14.66 14.29 17a1 1 0 001.42 0 1 1 0 000-1.42zm-3-1.08L12 9.16l2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42l-3-3a1 1 0 00-1.42 0l-3 3a1 1 0 001.42 1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAngleDoubleUp);
export default ForwardRef;
