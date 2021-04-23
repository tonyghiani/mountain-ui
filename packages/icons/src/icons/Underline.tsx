import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUnderline(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 15.5a5 5 0 005-5v-5a1 1 0 00-2 0v5a3 3 0 01-6 0v-5a1 1 0 00-2 0v5a5 5 0 005 5zm5 2H7a1 1 0 000 2h10a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUnderline);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
