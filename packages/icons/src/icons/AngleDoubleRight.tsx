import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAngleDoubleRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.46 8.29A1 1 0 107 9.71L9.34 12 7 14.29a1 1 0 000 1.42 1 1 0 001.42 0l3-3a1 1 0 000-1.42zm8.5 3l-3-3a1 1 0 00-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l3-3a1 1 0 00.04-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAngleDoubleRight);
export default ForwardRef;
