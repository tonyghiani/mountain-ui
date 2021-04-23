import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTear(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.56 2.17a1 1 0 00-1.12 0c-.3.2-7.19 5-7.19 12.08a7.75 7.75 0 0015.5 0c0-7.2-6.9-11.89-7.19-12.08zM12 20a5.76 5.76 0 01-5.75-5.75c0-5 4.21-8.77 5.75-10 1.55 1.21 5.75 5 5.75 10A5.76 5.76 0 0112 20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTear);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
