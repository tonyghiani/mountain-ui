import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltSearch(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6h-5a1 1 0 000 2h5a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-2a1 1 0 00-2 0v2a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 22a1.1 1.1 0 00.4-.08A1 1 0 0022 21V9a3 3 0 00-3-3zM8.57 10l1.72 1.73a1 1 0 001.42 0 1 1 0 000-1.42L10 8.57a4.37 4.37 0 00.65-2.26 4.32 4.32 0 10-8.65 0 4.32 4.32 0 004.31 4.32A4.35 4.35 0 008.57 10zM4 6.31a2.29 2.29 0 01.68-1.63 2.32 2.32 0 013.32 0A2.31 2.31 0 018 8a2.32 2.32 0 01-4-1.69z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltSearch);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;