import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLightbulbAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.09 2.82a8 8 0 00-6.68-1.66 8 8 0 00-6.27 6.32 8.07 8.07 0 001.72 6.65A4.54 4.54 0 017 17v3a3 3 0 003 3h4a3 3 0 003-3v-2.81A5.17 5.17 0 0118.22 14a8 8 0 00-1.13-11.2zM15 20a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1h6zm1.67-7.24A7.13 7.13 0 0015 17h-2v-3a1 1 0 00-2 0v3H9a6.5 6.5 0 00-1.6-4.16 6 6 0 013.39-9.72A6 6 0 0118 9a5.89 5.89 0 01-1.33 3.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLightbulbAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;