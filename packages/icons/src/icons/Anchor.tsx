import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAnchor(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 13h-2a1 1 0 000 2h.91A6 6 0 0113 19.91V11h1a1 1 0 000-2h-1V7.82a3 3 0 10-2 0V9h-1a1 1 0 000 2h1v8.91A6 6 0 016.09 15H7a1 1 0 000-2H5a1 1 0 00-1 1 8 8 0 0016 0 1 1 0 00-1-1zm-7-7a1 1 0 111-1 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAnchor);
export default ForwardRef;
