import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMapMarkerShield(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.41 6.53a2.24 2.24 0 01-1.82-.39 1 1 0 00-1.18 0 2.24 2.24 0 01-1.82.39 1 1 0 00-.84.2 1 1 0 00-.37.78v2.9A4.14 4.14 0 0010 13.74l1.37 1a1 1 0 001.18 0l1.37-1a4.14 4.14 0 001.66-3.33v-2.9a1 1 0 00-.37-.78 1 1 0 00-.8-.2zm-.79 3.88a2.15 2.15 0 01-.85 1.73l-.77.57-.77-.57a2.15 2.15 0 01-.85-1.73V8.57A4.22 4.22 0 0012 8.12a4.22 4.22 0 001.62.45zm6.84-.78A8.5 8.5 0 007.3 3.36a8.56 8.56 0 00-3.76 6.27A8.46 8.46 0 006 16.46l5.3 5.31a1 1 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.42l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMapMarkerShield);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;