import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgClosedCaptioningSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 01-8-8 7.92 7.92 0 011.69-4.9L7.2 8.61A3 3 0 006 11v2a3 3 0 005.59 1.5 1 1 0 10-1.72-1 1 1 0 01-1.58.19A.93.93 0 018 13v-2a1 1 0 01.67-.92L12 13.46A3 3 0 0014.54 16l2.36 2.36A7.92 7.92 0 0112 20zm6.31-3.1l-1.52-1.52a2.94 2.94 0 00.8-.88 1 1 0 10-1.72-1 1 1 0 01-.55.41L14 12.59V11a1 1 0 011.88-.48 1 1 0 001.37.34 1 1 0 00.34-1.38 3.08 3.08 0 00-.46-.59A3 3 0 0012 10.62l-.35-.35a1 1 0 00-.1-.79 3.08 3.08 0 00-.46-.59 2.94 2.94 0 00-1.67-.84L7.1 5.69A7.92 7.92 0 0112 4a8 8 0 018 8 7.92 7.92 0 01-1.69 4.9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgClosedCaptioningSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;