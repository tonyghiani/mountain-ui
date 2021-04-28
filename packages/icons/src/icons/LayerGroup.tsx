import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLayerGroup(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2.5 8.86l9 5.2a1 1 0 001 0l9-5.2A1 1 0 0022 8a1 1 0 00-.5-.87l-9-5.19a1 1 0 00-1 0l-9 5.19A1 1 0 002 8a1 1 0 00.5.86zM12 4l7 4-7 4-7-4zm8.5 7.17L12 16l-8.5-4.87a1 1 0 00-1.37.37 1 1 0 00.37 1.36l9 5.2a1 1 0 001 0l9-5.2a1 1 0 00.37-1.36 1 1 0 00-1.37-.37zm0 4L12 20l-8.5-4.87a1 1 0 00-1.37.37 1 1 0 00.37 1.36l9 5.2a1 1 0 001 0l9-5.2a1 1 0 00.37-1.36 1 1 0 00-1.37-.37z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLayerGroup);
export default ForwardRef;
