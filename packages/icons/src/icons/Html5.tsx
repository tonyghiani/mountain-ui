import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHtml5(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3.183 2l1.604 18 7.202 2 7.222-2.002L20.818 2zm14.142 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.004-4.522-1.256-.31-3.466h2.216l.157 1.76 2.46.664h.001l2.463-.665.256-2.863H7.06L6.464 5.68h11.059z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHtml5);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;