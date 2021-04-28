import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBookmarkFull(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 2H6a1 1 0 00-1 1v18a1 1 0 001.65.76L12 17.27l5.29 4.44A1 1 0 0018 22a.84.84 0 00.38-.08A1 1 0 0019 21V3a1 1 0 00-1-1zm-1 16.86l-4.36-3.66a1 1 0 00-1.28 0L7 18.86V4h10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBookmarkFull);
export default ForwardRef;
