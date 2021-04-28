import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVuejsAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.867 3.374a1 1 0 00-.866-.502l-4.97-.004h-3.652a1.002 1.002 0 00-.817.425l-.559.796-.564-.798a.998.998 0 00-.816-.423H6.968l-4.973.026A1 1 0 001.137 4.4l10.02 17.106a1 1 0 00.863.494 1 1 0 00.864-.496l9.98-17.128a1.002 1.002 0 00.003-1.002zM10.105 4.868l1.085 1.533a.999.999 0 00.816.423h.001a1.003 1.003 0 00.817-.425L13.9 4.87l1.363-.002-3.244 5.454-3.275-5.454zm1.912 14.15L3.74 4.885l2.67-.015 4.754 7.918a1 1 0 00.857.485h.006a1 1 0 00.857-.489l4.708-7.916 2.67.003z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVuejsAlt);
export default ForwardRef;
