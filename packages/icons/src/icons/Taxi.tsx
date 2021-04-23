import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTaxi(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.38 14.58a1 1 0 00-.58-.06.64.64 0 00-.18.06.76.76 0 00-.18.09l-.15.12a1.05 1.05 0 00-.29.71 1 1 0 00.29.71 1.19 1.19 0 00.33.22 1 1 0 001.09-.22 1.15 1.15 0 00.21-.33.84.84 0 00.08-.38 1.05 1.05 0 00-.29-.71.93.93 0 00-.33-.21zm2.62-3.9V7.5a3 3 0 00-3-3h-.78l-.77-2.32a1 1 0 00-.95-.68h-5a1 1 0 00-.95.68L7.78 4.5H7a3 3 0 00-3 3v3.18a3 3 0 00-2 2.82v6a1 1 0 001 1h1v1a1 1 0 002 0v-1h12v1a1 1 0 002 0v-1h1a1 1 0 001-1v-6a3 3 0 00-2-2.82zM10.22 3.5h3.56l.33 1H9.89zM6 7.5a1 1 0 011-1h10a1 1 0 011 1v3H6zm14 11H4v-5a1 1 0 011-1h14a1 1 0 011 1zM6.62 14.58a1 1 0 00-.33.21 1.05 1.05 0 00-.29.71 1 1 0 001.38.93 1.19 1.19 0 00.33-.22A1 1 0 008 15.5a1.05 1.05 0 00-.29-.71 1 1 0 00-1.09-.21zM13 14.5h-2a1 1 0 000 2h2a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTaxi);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;