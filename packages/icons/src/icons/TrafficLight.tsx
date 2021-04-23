import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTrafficLight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 5.5A1.5 1.5 0 1013.5 7 1.5 1.5 0 0012 5.5zm10 3h-.54a6 6 0 001.54-4 1 1 0 00-1-1h-4.18a3 3 0 00-2.82-2H9a3 3 0 00-2.82 2H2a1 1 0 00-1 1 6 6 0 001.54 4H2a1 1 0 00-1 1 6 6 0 001.54 4H2a1 1 0 00-1 1 6 6 0 005.16 5.93A3 3 0 009 22.5h6a3 3 0 002.84-2.07A6 6 0 0023 14.5a1 1 0 00-1-1h-.54a6 6 0 001.54-4 1 1 0 00-1-1zM6 18.37a4 4 0 01-2.87-2.87H6zm0-5a4 4 0 01-2.87-2.87H6zm0-5a4.09 4.09 0 01-1.83-1 4.09 4.09 0 01-1-1.83H6zM16 19.5a1 1 0 01-1 1H9a1 1 0 01-1-1v-15a1 1 0 011-1h6a1 1 0 011 1zm3.83-2.17a4.09 4.09 0 01-1.83 1V15.5h2.87a4.09 4.09 0 01-1.04 1.83zm0-5a4.09 4.09 0 01-1.83 1V10.5h2.87a4.09 4.09 0 01-1.04 1.83zm0-5a4.09 4.09 0 01-1.83 1V5.5h2.87a4.09 4.09 0 01-1.04 1.83zM12 15.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zm0-5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTrafficLight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;