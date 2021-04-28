import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGoogleDrive(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.423 13.888l-6.09-10.55H8.668l6.09 10.55zM8.09 4.338L2 14.888l3.334 5.774 6.089-10.55zm1.733 10.55l-3.333 5.774h12.178L22 14.887z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGoogleDrive);
export default ForwardRef;
