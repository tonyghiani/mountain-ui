import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgStar(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 9.67a1 1 0 00-.86-.67l-5.69-.83L12.9 3a1 1 0 00-1.8 0L8.55 8.16 2.86 9a1 1 0 00-.81.68 1 1 0 00.25 1l4.13 4-1 5.68a1 1 0 00.4 1 1 1 0 001.05.07L12 18.76l5.1 2.68a.93.93 0 00.46.12 1 1 0 00.59-.19 1 1 0 00.4-1l-1-5.68 4.13-4A1 1 0 0022 9.67zm-6.15 4a1 1 0 00-.29.89l.72 4.19-3.76-2a1 1 0 00-.94 0l-3.76 2 .72-4.19a1 1 0 00-.29-.89l-3-3 4.21-.61a1 1 0 00.76-.55L12 5.7l1.88 3.82a1 1 0 00.76.55l4.21.61z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStar);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;