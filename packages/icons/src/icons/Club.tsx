import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgClub(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 12.5a5.52 5.52 0 00-3.51-5.12 5.49 5.49 0 00-11 0A5.5 5.5 0 008.5 18h.2a6.91 6.91 0 01-1.24 2.39A1 1 0 008.24 22h7.52a1 1 0 00.78-1.63A6.91 6.91 0 0115.3 18h.2a5.51 5.51 0 005.5-5.5zM10.06 20a8.89 8.89 0 00.81-2.56 5.47 5.47 0 001.13-.7 5.47 5.47 0 001.13.7 8.89 8.89 0 00.81 2.56zm2.72-5.3l-.08-.08-.08-.08h-.07l-.18-.09-.18-.06h-.38l-.18.06a.56.56 0 00-.17.09h-.08l-.08.08-.08.08a3.5 3.5 0 11-3.47-5.62A1.11 1.11 0 007.91 9a1.42 1.42 0 00.18-.08.83.83 0 00.14-.13.62.62 0 00.21-.31.61.61 0 00.07-.17.69.69 0 000-.2 1 1 0 000-.17 3.4 3.4 0 010-.45 3.5 3.5 0 017 0 3.4 3.4 0 010 .45.81.81 0 000 .16.74.74 0 000 .21.61.61 0 00.07.17.62.62 0 00.21.31.83.83 0 00.14.13 1.42 1.42 0 00.18.08 1.11 1.11 0 00.16.07 3.5 3.5 0 11-3.47 5.62z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgClub);
export default ForwardRef;
