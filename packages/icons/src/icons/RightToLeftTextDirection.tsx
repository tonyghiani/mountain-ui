import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgRightToLeftTextDirection(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.5 17H5.91l1.3-1.29a1 1 0 00-1.42-1.42l-3 3a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l3 3a1 1 0 001.42 0 1 1 0 000-1.42L5.91 19H20.5a1 1 0 000-2zm-9-7v4a1 1 0 002 0V4h2v10a1 1 0 002 0V4h1a1 1 0 000-2h-7a4 4 0 000 8zm0-6v4a2 2 0 010-4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRightToLeftTextDirection);
export default ForwardRef;
