import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgImage(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM5 18a1 1 0 01-1-1v-2.42l3.3-3.29a1 1 0 011.4 0L15.41 18zm15-1a1 1 0 01-1 1h-.77l-3.81-3.83.88-.88a1 1 0 011.4 0l3.3 3.29zm0-3.24l-1.88-1.87a3.06 3.06 0 00-4.24 0l-.88.88-2.88-2.88a3.06 3.06 0 00-4.24 0L4 11.76V7a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgImage);
export default ForwardRef;
