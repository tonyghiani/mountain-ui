import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPizzaSlice(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.51 12.48a1 1 0 101 1 1 1 0 00-1-1zm0-4.48a1 1 0 101 1 1 1 0 00-1-1zM12 10a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm8.5-1.43a3 3 0 00-2.3-.29 2.9 2.9 0 00-1.09.56L5.51 2.13a1 1 0 00-1 0A1 1 0 004 3v13.17A2.94 2.94 0 002 19a3 3 0 002.92 3h.58a18.57 18.57 0 0016.11-9.41 3 3 0 00-1.1-4.02zM6 4.73l9.89 5.71A12.57 12.57 0 016 16zm13.87 6.88A16.58 16.58 0 015 20a1 1 0 01-1-1 1 1 0 01.3-.72A1 1 0 015 18h.51a14.5 14.5 0 0012.62-7.37.9.9 0 01.58-.44 1 1 0 01.75.09 1 1 0 01.42 1.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPizzaSlice);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;