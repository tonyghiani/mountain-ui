import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltInfo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5 11a1 1 0 001-1V6a1 1 0 00-2 0v4a1 1 0 001 1zm-.71-7.29a1 1 0 001.09.21 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33A.84.84 0 006 3a1 1 0 00-.29-.71 1 1 0 00-1.09-.21 1 1 0 00-.33.21A1 1 0 004 3a1 1 0 00.08.38 1.15 1.15 0 00.21.33zM17 6H9a1 1 0 000 2h8a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H7a1 1 0 01-1-1v-2a1 1 0 00-2 0v2a3 3 0 003 3h8.36l3 2.73A1 1 0 0019 22a1.1 1.1 0 00.4-.08A1 1 0 0020 21V9a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltInfo);
export default ForwardRef;
