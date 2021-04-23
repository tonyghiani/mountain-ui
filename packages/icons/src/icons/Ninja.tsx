import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgNinja(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.44 5.34l-.06-.07a10 10 0 00-14.76 0l-.06.07A10 10 0 1022 12a9.93 9.93 0 00-2.56-6.66zM12 4a7.87 7.87 0 013.86 1H8.14A7.87 7.87 0 0112 4zM5.76 7h12.48a8 8 0 011.69 4H4.07a8 8 0 011.69-4zM12 20a8 8 0 01-7.93-7h15.86A8 8 0 0112 20zM8 8a1 1 0 101 1 1 1 0 00-1-1zm6 0a1 1 0 101 1 1 1 0 00-1-1zm-3 9.93a1 1 0 00.49.13 1 1 0 00.87-.51A3 3 0 0115 16a1 1 0 000-2 5 5 0 00-4.37 2.57 1 1 0 00.37 1.36z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgNinja);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
