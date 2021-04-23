import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDesktopSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M10.66 6H18a1 1 0 011 1v6a.94.94 0 01-.14.5 1 1 0 00.31 1.38.94.94 0 00.53.16 1 1 0 00.84-.46A2.94 2.94 0 0021 13V7a3 3 0 00-3-3h-7.34a1 1 0 000 2zm11.05 14.29L5.86 4.45 3.71 2.29a1 1 0 00-1.42 1.42l1.4 1.39A3 3 0 003 7v6a3 3 0 003 3h5v2H7a1 1 0 000 2h10a1 1 0 00.93-.66l2.36 2.37a1 1 0 001.42 0 1 1 0 000-1.42zM6 14a1 1 0 01-1-1V7a1 1 0 01.12-.46L12.59 14zm7 4v-2h1.59l2 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDesktopSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;