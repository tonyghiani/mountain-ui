import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBagAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6.5h-3v-1a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1V13a21.71 21.71 0 008 1.53A21.75 21.75 0 0020 13zm0-7.69a19.89 19.89 0 01-16 0V9.5a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBagAlt);
export default ForwardRef;
