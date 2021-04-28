import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShovel(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 7.38l-5.09-5.09a1 1 0 00-1.41 0 1 1 0 000 1.42L17 5.54 11.58 11l-1-1a3 3 0 00-4.25 0l-3.45 3.42A3 3 0 002 15.55V19a3 3 0 003 3h3.45a3 3 0 002.13-.88L14 17.69a3 3 0 000-4.25l-1-1L18.46 7l1.83 1.83a1 1 0 001.42 0 1 1 0 000-1.45zm-9.11 8.89l-3.44 3.44a1 1 0 01-.71.29H5a1 1 0 01-1-1v-3.45a1 1 0 01.29-.71l3.44-3.44a1 1 0 011.41 0l1 1-.89.9a1 1 0 000 1.41A1 1 0 0010 15a1 1 0 00.7-.29l.9-.89 1 1a1 1 0 010 1.45z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShovel);
export default ForwardRef;
