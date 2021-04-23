import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDesktopAltSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 20.29l-18-18a1 1 0 00-1.42 1.42l1 1A3 3 0 003 6v8a3 3 0 003 3h3v2H6a1 1 0 000 2h12a1 1 0 00.93-.66l1.36 1.37a1 1 0 001.42 0 1 1 0 000-1.42zM5 6.41L9.59 11H5zM13 19h-2v-2h2zm-7-4a1 1 0 01-1-1v-1h6.59l2 2zm9 4v-2h.59l2 2zM9.66 5H18a1 1 0 011 1v5h-1.34a1 1 0 000 2H19v1a.37.37 0 010 .11 1 1 0 00.78 1.18h.2a1 1 0 001-.8A2.84 2.84 0 0021 14V6a3 3 0 00-3-3H9.66a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDesktopAltSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;