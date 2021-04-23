import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMobileVibrate(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.88 14.12L9.73 14l-.18-.1-.18-.05a1 1 0 00-.9.27.83.83 0 00-.22.33.94.94 0 000 .76 1.07 1.07 0 00.54.54 1 1 0 00.38.08 1.09 1.09 0 00.39-.08.87.87 0 00.32-.22 1 1 0 00.22-.32 1 1 0 00.07-.38.84.84 0 00-.08-.38.93.93 0 00-.21-.33zM3.51 8.76a1 1 0 00.71-.3l4.24-4.24a1 1 0 000-1.41 1 1 0 00-1.41 0L2.81 7.05a1 1 0 000 1.41 1 1 0 00.7.3zm17.68 6.78a1 1 0 00-1.41 0l-4.24 4.24a1 1 0 00.7 1.71 1 1 0 00.71-.3L21.19 17a1 1 0 000-1.46zm.17-5.66a3 3 0 00-.87-2.12l-4.25-4.25a3.08 3.08 0 00-4.24 0L3.51 12a3 3 0 000 4.24l4.25 4.25a3 3 0 004.24 0L20.49 12a3 3 0 00.87-2.12zm-2.29.71l-8.48 8.48a1 1 0 01-1.42 0l-4.24-4.24a1 1 0 010-1.42l8.48-8.48a1 1 0 011.42 0l4.24 4.24a1 1 0 010 1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMobileVibrate);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;