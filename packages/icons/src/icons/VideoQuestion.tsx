import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVideoQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.21 17.29a1.047 1.047 0 00-1.42 0 1.027 1.027 0 00-.21.33.942.942 0 000 .76 1.154 1.154 0 00.21.33A1 1 0 0010.5 18a1 1 0 00-.08-.38 1.151 1.151 0 00-.21-.33zM9.5 9a3.01 3.01 0 00-2.598 1.5 1 1 0 101.73 1A1 1 0 119.5 13a1 1 0 00-1 1v1a1 1 0 002 0v-.184A2.993 2.993 0 009.5 9zm12.025-2.85a.999.999 0 00-.972-.045l-3.564 1.782A2.998 2.998 0 0014 5H5a3.003 3.003 0 00-3 3v6a3.003 3.003 0 003 3h1a1 1 0 000-2H5a1.001 1.001 0 01-1-1V8a1.001 1.001 0 011-1h9a1.001 1.001 0 011 1v6a1.001 1.001 0 01-1 1h-.5a1 1 0 000 2h.5a2.998 2.998 0 002.989-2.888l3.564 1.782A1 1 0 0022 15V7a1 1 0 00-.475-.85zM20 13.381l-3-1.5v-1.764l3-1.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVideoQuestion);
export default ForwardRef;
