import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMobileAndroidAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 2H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10zm0-3H7V5a1 1 0 011-1h8a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMobileAndroidAlt);
export default ForwardRef;
