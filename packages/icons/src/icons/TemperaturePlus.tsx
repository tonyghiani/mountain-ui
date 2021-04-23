import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTemperaturePlus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.5 15.28V5.5a1 1 0 00-2 0v9.78a2 2 0 00-1 1.72 2 2 0 004 0 2 2 0 00-1-1.72zm9-12.78H19V2a1 1 0 00-2 0v.5h-.5a1 1 0 000 2h.5V5a1 1 0 002 0v-.5h.5a1 1 0 000-2zm-5.5 3a4.5 4.5 0 00-9 0V13a6 6 0 003.21 9.83 7 7 0 001.28.17A6 6 0 0014 13zm-2 14.61a4 4 0 01-6.42-2.2 4 4 0 011.1-3.76 1 1 0 00.3-.71V5.5a2.5 2.5 0 015 0v7.94a1 1 0 00.3.71 4 4 0 01-.28 6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTemperaturePlus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
