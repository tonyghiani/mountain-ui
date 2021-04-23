import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgChartPie(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 104.93 18.69H17.05A10 10 0 0012 2zm1 2.07A8 8 0 0119.93 11H13zM12 20a8 8 0 01-1-15.93V12a1.09 1.09 0 00.07.35V12.5l4 6.87A7.81 7.81 0 0112 20zm4.83-1.64L13.73 13h6.2a8 8 0 01-3.1 5.36z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgChartPie);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
