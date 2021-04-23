import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLocationArrow(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.15 2.86a2.89 2.89 0 00-3-.71L4 6.88a2.9 2.9 0 00-.12 5.47l5.24 2a.93.93 0 01.53.52l2 5.25A2.87 2.87 0 0014.36 22h.07a2.88 2.88 0 002.69-2l4.73-14.17a2.89 2.89 0 00-.7-2.97zM20 5.2l-4.78 14.18a.88.88 0 01-.84.62.92.92 0 01-.87-.58l-2-5.25a2.91 2.91 0 00-1.67-1.68l-5.25-2A.9.9 0 014 9.62a.88.88 0 01.62-.84L18.8 4.05A.91.91 0 0120 5.2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLocationArrow);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;