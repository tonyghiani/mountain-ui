import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTextFields(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 6a1 1 0 00-1-1H3a1 1 0 000 2h5v11a1 1 0 002 0V7h5a1 1 0 001-1zm5 5h-6a1 1 0 000 2h2v5a1 1 0 002 0v-5h2a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTextFields);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
