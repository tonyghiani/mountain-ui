import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCommentAltCheck(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.77 9.15l5.44-5.44a1 1 0 10-1.42-1.42L6.06 7 4.21 5.17a1 1 0 00-1.42 1.42l2.56 2.56a1 1 0 001.42 0zM18.5 6H13a1 1 0 000 2h5.5a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H8.5a1 1 0 01-1-1v-3.5a1 1 0 00-2 0V16a3 3 0 003 3h8.36l3 2.73a1 1 0 00.68.27 1.1 1.1 0 00.4-.08 1 1 0 00.6-.92V9a3 3 0 00-3.04-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltCheck);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
