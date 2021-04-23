import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgChartPieAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 12h-7V5c0-.6-.4-1-1-1-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-.6-.4-1-1-1zm-7 7.9c-3.8.6-7.4-2.1-7.9-5.9-.6-3.8 2.1-7.4 5.9-7.9V13c0 .6.4 1 1 1h6.9c-.4 3.1-2.8 5.5-5.9 5.9zM15 2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1 0-3.9-3.1-7-7-7zm1 6V4.1c2 .4 3.5 1.9 3.9 3.9H16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgChartPieAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;