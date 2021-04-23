import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFootballBall(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.84 5.56a4.08 4.08 0 00-1.14-2.25 4.08 4.08 0 00-2.25-1.14A14.45 14.45 0 002.16 18.44a4.08 4.08 0 001.14 2.25 4.08 4.08 0 002.25 1.14 13.12 13.12 0 002.08.17 14.37 14.37 0 0010.11-4.26 14.23 14.23 0 004.1-12.18zM4.21 18.37a1.68 1.68 0 01-.07-.24A12.21 12.21 0 017.67 7.67 12.39 12.39 0 0116.37 4a10.44 10.44 0 011.76.14 1.68 1.68 0 01.24.07l-4.93 4.94-.73-.73a1 1 0 00-1.42 0 1 1 0 000 1.41l.73.73L10.56 12l-.73-.73a1 1 0 00-1.41 0 1 1 0 000 1.42l.73.73zm12.12-2a12.24 12.24 0 01-10.46 3.49 1.68 1.68 0 01-.24-.07l4.93-4.94.73.73a1 1 0 101.42-1.41l-.71-.73L13.44 12l.73.73a1 1 0 00.71.29 1 1 0 00.7-1.71l-.73-.73 4.94-4.93a1.68 1.68 0 01.07.24 12.21 12.21 0 01-3.53 10.44z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFootballBall);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;