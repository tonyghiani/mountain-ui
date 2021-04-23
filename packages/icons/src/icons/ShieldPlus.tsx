import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShieldPlus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 11h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2zm5.63-7.35a1.007 1.007 0 00-.835-.203 7.98 7.98 0 01-6.223-1.267.999.999 0 00-1.144 0 7.976 7.976 0 01-6.223 1.267A1 1 0 004 4.427v7.456a9.019 9.019 0 003.769 7.324l3.65 2.607a1 1 0 001.162 0l3.65-2.607A9.017 9.017 0 0020 11.883V4.426a1.001 1.001 0 00-.37-.776zM18 11.883a7.016 7.016 0 01-2.93 5.696L12 19.771 8.93 17.58A7.017 7.017 0 016 11.883v-6.3a9.955 9.955 0 006-1.391 9.955 9.955 0 006 1.391z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShieldPlus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;