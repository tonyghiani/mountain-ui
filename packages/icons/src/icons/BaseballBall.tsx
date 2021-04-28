import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBaseballBall(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.922 6.44a1 1 0 00-1.703 1.05q.265.428.565.843a1 1 0 001.62-1.174q-.257-.353-.482-.719zm-2.73 9.222a1 1 0 10-1.609 1.188c.17.23.327.466.476.709a1 1 0 101.705-1.047c-.178-.29-.368-.574-.572-.85zm-3.707-3.429a1 1 0 00-1.045 1.705q.364.223.713.479A1 1 0 108.331 12.8q-.414-.302-.846-.567zm10.06-2.167q-.364-.224-.715-.48a1 1 0 00-1.178 1.618q.415.302.847.567a1 1 0 101.047-1.705zm1.447-5.065a9.9 9.9 0 100 14.001 9.913 9.913 0 000-14.001zM17.72 17.729a8.03 8.03 0 01-4.516 2.273.97.97 0 00-1.746.074 8.062 8.062 0 01-7.535-7.532.975.975 0 00.073-1.747 8.04 8.04 0 016.784-6.792.997.997 0 00.857.498 1.028 1.028 0 00.23-.026.982.982 0 00.658-.546 8.054 8.054 0 017.538 7.538.972.972 0 00-.074 1.741 8.046 8.046 0 01-2.27 4.519z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBaseballBall);
export default ForwardRef;
