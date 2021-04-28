import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSignOutAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.59 13l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-4-4a1 1 0 10-1.42 1.42l2.3 2.29H3a1 1 0 000 2zM12 2a10 10 0 00-9 5.55 1 1 0 001.8.9A8 8 0 1112 20a7.93 7.93 0 01-7.16-4.45 1 1 0 00-1.8.9A10 10 0 1012 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSignOutAlt);
export default ForwardRef;
