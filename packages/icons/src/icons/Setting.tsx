import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSetting(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.9 12.66a1 1 0 010-1.32l1.28-1.44a1 1 0 00.12-1.17l-2-3.46a1 1 0 00-1.07-.48l-1.88.38a1 1 0 01-1.15-.66l-.61-1.83a1 1 0 00-.95-.68h-4a1 1 0 00-1 .68l-.56 1.83a1 1 0 01-1.15.66L5 4.79a1 1 0 00-1 .48L2 8.73a1 1 0 00.1 1.17l1.27 1.44a1 1 0 010 1.32L2.1 14.1a1 1 0 00-.1 1.17l2 3.46a1 1 0 001.07.48l1.88-.38a1 1 0 011.15.66l.61 1.83a1 1 0 001 .68h4a1 1 0 00.95-.68l.61-1.83a1 1 0 011.15-.66l1.88.38a1 1 0 001.07-.48l2-3.46a1 1 0 00-.12-1.17zM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 00-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 00-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 000-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 003.45-2L10.36 4h2.56l.38 1.14a3 3 0 003.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 000 3.98zm-6.77-6a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSetting);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;