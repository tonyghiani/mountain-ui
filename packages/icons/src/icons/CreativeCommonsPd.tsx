import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCreativeCommonsPd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 01-8-8 7.92 7.92 0 011.69-4.9l2.36 2.37A3.07 3.07 0 008 10v4a3 3 0 003 3h2a3 3 0 001.89-.69l2 2A7.92 7.92 0 0112 20zm-2-6v-2.59l3.46 3.46A.91.91 0 0113 15h-2a1 1 0 01-1-1zm8.31 2.9L16 14.53a3.07 3.07 0 000-.53 1 1 0 00-1-1 .91.91 0 00-.46.13l-4-4A.91.91 0 0111 9h2a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-2a3 3 0 00-1.89.69l-2-2A7.92 7.92 0 0112 4a8 8 0 018 8 7.92 7.92 0 01-1.69 4.9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCreativeCommonsPd);
export default ForwardRef;
