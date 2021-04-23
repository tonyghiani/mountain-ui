import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGlassMartiniAltSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.71 16.29l-14-14a1 1 0 00-1.42 1.42L6.59 6H5a1 1 0 00-.9.57 1 1 0 00.12 1L11 16.1V20H6.75a1 1 0 000 2h10.5a1 1 0 000-2H13v-3.9l1.64-2 3.65 3.65a1 1 0 001.42 0 1 1 0 000-1.46zM7.08 8h1.51l1.89 1.89H8.59zM12 14.15l-1.81-2.26h2.29l.74.74zM14.66 8h2.26l-.63.79a1 1 0 00.15 1.4 1 1 0 00.63.22 1 1 0 00.78-.37l1.93-2.42a1 1 0 00.12-1A1 1 0 0019 6h-4.34a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGlassMartiniAltSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
