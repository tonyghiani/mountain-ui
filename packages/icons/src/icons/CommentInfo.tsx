import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgCommentInfo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 11a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm0-3a1 1 0 101 1 1 1 0 00-1-1zm0-6A10 10 0 002 12a9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 000-20zm0 18H5.41l.93-.93a1 1 0 00.3-.71 1 1 0 00-.3-.7A8 8 0 1112 20z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentInfo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
