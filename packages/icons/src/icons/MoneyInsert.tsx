import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMoneyInsert(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.46 6l.54-.59V9a1 1 0 002 0V5.41l.54.55A1 1 0 0015 6a1 1 0 000-1.42l-2.29-2.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21L9 4.54A1 1 0 0010.46 6zM12 12a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm-7-1a1 1 0 101-1 1 1 0 00-1 1zm14 0a1 1 0 10-1 1 1 1 0 001-1zm1-7h-4a1 1 0 000 2h4a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h4a1 1 0 000-2H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3v-8a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMoneyInsert);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;