import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPanoramaHAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.46 5.83A1 1 0 0020.7 5h-.11A37.49 37.49 0 003.41 5H3.3a1 1 0 00-.76.8 35.52 35.52 0 000 12.34 1 1 0 00.76.8h.11A37.62 37.62 0 0012 20a37.62 37.62 0 008.59-1h.11a1 1 0 00.76-.8 35.52 35.52 0 000-12.37zM19.6 17.17a35.42 35.42 0 01-15.2 0 33.2 33.2 0 010-10.34 35.42 35.42 0 0115.2 0 33.2 33.2 0 010 10.34z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPanoramaHAlt);
export default ForwardRef;
