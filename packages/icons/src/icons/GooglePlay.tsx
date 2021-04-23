import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGooglePlay(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.919 10.653a503.26 503.26 0 01-4.023-2.323l-.003-.002L4.64 1.253a1.679 1.679 0 00-1.408-.16.953.953 0 00-.076.03 1.418 1.418 0 00-.173.07 1.519 1.519 0 00-.738 1.364v18.986a1.435 1.435 0 00.692 1.27 1.308 1.308 0 00.155.064.977.977 0 00.087.035 1.379 1.379 0 00.446.083 1.673 1.673 0 00.831-.232l12.438-7.182 4.021-2.322a1.525 1.525 0 00.842-1.334 1.49 1.49 0 00-.837-1.272zM4.244 19.839V4.102l7.94 7.859zm5.018-2.162l4.344-4.31 1.15 1.139-5.494 3.171zm4.342-7.125L9.206 6.2l5.554 3.207zm2.947 2.917l-1.526-1.51 1.528-1.516c.72.419 1.843 1.07 2.616 1.515z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGooglePlay);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;