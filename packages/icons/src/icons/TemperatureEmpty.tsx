import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTemperatureEmpty(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 15a2 2 0 102 2 2 2 0 00-2-2zm4.5-2V5.5a4.5 4.5 0 00-9 0V13a6 6 0 003.21 9.83A7 7 0 0012 23a6 6 0 004.5-10zm-2 7.07a4 4 0 01-5.32-6 1 1 0 00.3-.71V5.5a2.5 2.5 0 015 0v7.94a1 1 0 00.3.71 4 4 0 01-.28 6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTemperatureEmpty);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;