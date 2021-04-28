import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgIntercom(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.5 2h-15A2.5 2.5 0 002 4.5v15A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0019.5 2zm-4.83 3.67a.66.66 0 01.67-.67.68.68 0 01.66.66v8.9a.67.67 0 01-1.33 0zm-3.34-.34a.67.67 0 01.67-.67.67.67 0 01.67.67V15a.67.67 0 01-1.34 0zM8 5.67a.67.67 0 011.33 0v8.9a.66.66 0 01-.67.66.68.68 0 01-.66-.66zM4.67 7A.67.67 0 016 7v6a.67.67 0 01-.67.66.67.67 0 01-.66-.66zM19.1 17.17a11.3 11.3 0 01-7.1 2.16 11.3 11.3 0 01-7.1-2.16.67.67 0 01.87-1A10.2 10.2 0 0012 18a10.15 10.15 0 006.23-1.84.67.67 0 01.87 1zm.23-4.17A.67.67 0 0118 13V7a.67.67 0 01.67-.66.66.66 0 01.66.66z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgIntercom);
export default ForwardRef;
