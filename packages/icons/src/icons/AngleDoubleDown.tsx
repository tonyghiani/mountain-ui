import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAngleDoubleDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 11.46a1 1 0 001.42 0l3-3A1 1 0 1014.29 7L12 9.34 9.71 7a1 1 0 10-1.42 1.46zm3 1.08L12 14.84l-2.29-2.3A1 1 0 008.29 14l3 3a1 1 0 001.42 0l3-3a1 1 0 00-1.42-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAngleDoubleDown);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
