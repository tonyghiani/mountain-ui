import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltShield(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.57 12a1 1 0 00.58-.19l1.62-1.16A4.56 4.56 0 0010.68 7V3.63a1 1 0 00-.37-.77 1 1 0 00-.84-.2 3 3 0 01-2.33-.48 1 1 0 00-1.14 0 3 3 0 01-2.33.48 1 1 0 00-1.2 1V7a4.55 4.55 0 001.9 3.7L6 11.81a.94.94 0 00.57.19zM4.46 7V4.72a5.16 5.16 0 002.11-.55 5.12 5.12 0 002.11.55V7a2.57 2.57 0 01-1.07 2l-1 .74L5.53 9a2.57 2.57 0 01-1.07-2zm14.08-1h-5a1 1 0 000 2h5a1 1 0 011 1v9.72L18 17.27a.94.94 0 00-.68-.27H8.54a1 1 0 01-1-1v-1a1 1 0 00-2 0v1a3 3 0 003 3h8.36l3 2.73a1 1 0 00.67.27 1.15 1.15 0 00.41-.08 1 1 0 00.59-.92V9a3 3 0 00-3.03-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltShield);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;