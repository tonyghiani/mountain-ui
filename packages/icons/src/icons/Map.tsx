import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgMap(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.32 5.05l-6-2h-.07a.7.7 0 00-.14 0h-.43L9 5 3.32 3.05a1 1 0 00-.9.14A1 1 0 002 4v14a1 1 0 00.68.95l6 2a1 1 0 00.62 0l5.7-1.9L20.68 21a1.19 1.19 0 00.32 0 .94.94 0 00.58-.19A1 1 0 0022 20V6a1 1 0 00-.68-.95zM8 18.61l-4-1.33V5.39l4 1.33zm6-1.33l-4 1.33V6.72l4-1.33zm6 1.33l-4-1.33V5.39l4 1.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMap);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
