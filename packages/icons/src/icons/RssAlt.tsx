import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgRssAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2.88 16.88a3 3 0 104.24 4.24 3 3 0 000-4.24 3.08 3.08 0 00-4.24 0zm2.83 2.83a1 1 0 01-1.42 0 1 1 0 010-1.42 1 1 0 011.42 0 1 1 0 010 1.42zM5 12a1 1 0 000 2 5 5 0 015 5 1 1 0 002 0 7 7 0 00-7-7zm0-4a1 1 0 000 2 9 9 0 019 9 1 1 0 002 0A11 11 0 005 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRssAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;