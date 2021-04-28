import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudBookmark(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 11h-5a1 1 0 00-1 1v8a1 1 0 001.56.83l1.94-1.3 1.89 1.26A1 1 0 0015 21a1 1 0 00.44-.1A1 1 0 0016 20v-8a1 1 0 00-1-1zm-1 7.12l-.94-.63a1 1 0 00-1.12 0l-.94.64V13h3zm4.42-10.9A7 7 0 005.06 9.11 4 4 0 006 17a1 1 0 000-2 2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1 1 0 101 1.74A5 5 0 0022 12a5 5 0 00-3.58-4.78z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudBookmark);
export default ForwardRef;
