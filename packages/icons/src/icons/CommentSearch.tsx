import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentSearch(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.21 10.29l-1.73-1.72a4.37 4.37 0 00.65-2.26 4.31 4.31 0 10-4.32 4.32 4.35 4.35 0 002.26-.63l1.72 1.73a1 1 0 001.42 0 1 1 0 000-1.44zM17.45 8a2.32 2.32 0 01-3.95-1.69 2.29 2.29 0 01.68-1.63 2.32 2.32 0 013.27 0 2.31 2.31 0 010 3.27zm2.05 6a1 1 0 00-1.22.72A7 7 0 0111.5 20H5.91l.64-.63a1 1 0 000-1.41 7 7 0 01-2-5 7 7 0 014.32-6.44 1 1 0 10-.74-1.86 9 9 0 00-3.66 14l-1.68 1.63a1 1 0 00-.21 1.09 1 1 0 00.92.62h8a9 9 0 008.72-6.75A1 1 0 0019.5 14z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentSearch);
export default ForwardRef;
