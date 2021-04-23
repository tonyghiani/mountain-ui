import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLeftIndentAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 5a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1zm4 2h8a1 1 0 000-2h-8a1 1 0 000 2zM5.77 9.69a1 1 0 00-1.41-.13l-2 1.67a1 1 0 000 1.54l2 1.67a1 1 0 001.41-.13 1 1 0 00-.13-1.41L4.56 12l1.08-.9a1 1 0 00.13-1.41zM21 9h-8a1 1 0 000 2h8a1 1 0 000-2zm0 4h-8a1 1 0 000 2h8a1 1 0 000-2zm0 4h-8a1 1 0 000 2h8a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLeftIndentAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
