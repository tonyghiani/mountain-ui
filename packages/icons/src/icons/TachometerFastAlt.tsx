import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTachometerFastAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 5a10 10 0 00-8.66 15 1 1 0 001.74-1A7.92 7.92 0 014 15a8 8 0 1114.93 4 1 1 0 00.37 1.37 1 1 0 001.36-.37A10 10 0 0012 5zm2.84 5.76l-1.55 1.54A2.91 2.91 0 0012 12a3 3 0 103 3 2.9 2.9 0 00-.3-1.28l1.55-1.54a1 1 0 000-1.42 1 1 0 00-1.41 0zM12 16a1 1 0 010-2 1 1 0 01.7.28 1 1 0 01.3.72 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTachometerFastAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;