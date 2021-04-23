import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentAltHeart(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 6.35a3.07 3.07 0 00-3.54.53 3 3 0 000 4.24L11.29 14a1 1 0 001.42 0l2.83-2.83a3 3 0 000-4.24A3.07 3.07 0 0012 6.35zm2.12 3.36L12 11.83 9.88 9.71a1 1 0 010-1.42 1 1 0 011.41 0 1 1 0 001.42 0 1 1 0 011.41 0 1 1 0 010 1.42zM19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h11.59l3.7 3.71A1 1 0 0021 22a.84.84 0 00.38-.08A1 1 0 0022 21V5a3 3 0 00-3-3zm1 16.59l-2.29-2.3A1 1 0 0017 16H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentAltHeart);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;