import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHeartBreak(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.16 4.61A6.27 6.27 0 0012 4a6.27 6.27 0 00-8.16 9.48l7.45 7.46a1 1 0 001.42 0l7.45-7.46a6.27 6.27 0 000-8.87zm-1.41 7.45L12 18.81l-6.75-6.75a4.26 4.26 0 015.54-6.45l-1.71 4a1 1 0 000 .83 1 1 0 00.65.53l2.77.7-1.4 2.89a1 1 0 00.46 1.34 1 1 0 00.44.1 1 1 0 00.9-.56l2-4a1 1 0 000-.86 1.05 1.05 0 00-.67-.55l-2.83-.71 1.45-3.39a4.26 4.26 0 015.92 6.13z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeartBreak);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;