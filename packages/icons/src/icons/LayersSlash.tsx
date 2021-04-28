import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLayersSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.49 13.94l-.34.2a1 1 0 00-.35 1.37 1 1 0 00.86.49 1 1 0 00.51-.14l.34-.2a1 1 0 00-1-1.72zm-8.84-7.58l.35-.21 7 4-1.76 1a1 1 0 00.5 1.87 1 1 0 00.5-.13L21.5 11a1 1 0 000-1.74l-9-5.19a1 1 0 00-1 0l-.85.49a1 1 0 001 1.74zM3.71 2.29a1 1 0 00-1.42 1.42l3.64 3.63-3.43 2a1 1 0 000 1.74l9 5.2a1.09 1.09 0 00.5.13 1.13 1.13 0 00.5-.13l1.5-.88 1.45 1.46-3.44 2-8.51-4.93a1 1 0 00-1 1.74l9 5.2a1 1 0 001 0l4.41-2.55 3.38 3.39a1 1 0 001.42 0 1 1 0 000-1.42zm8.29 12l-7-4.1 2.4-1.38 5.12 5.13z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLayersSlash);
export default ForwardRef;
