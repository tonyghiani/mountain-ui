import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgChartDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 11a1 1 0 00-1 1v2.59l-6.29-6.3a1 1 0 00-1.42 0L9 11.59l-5.29-5.3a1 1 0 00-1.42 1.42l6 6a1 1 0 001.42 0l3.29-3.3L18.59 16H16a1 1 0 000 2h5a1 1 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0022 17v-5a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgChartDown);
export default ForwardRef;
