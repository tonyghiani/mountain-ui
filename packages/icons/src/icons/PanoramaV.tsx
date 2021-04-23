import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPanoramaV(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.27 12a21.11 21.11 0 011.64-8.58 1 1 0 00-.07-1A1 1 0 0018 2H6a1 1 0 00-.84.46 1 1 0 00-.07 1A21.11 21.11 0 016.73 12a21.11 21.11 0 01-1.64 8.58 1 1 0 00.07 1A1 1 0 006 22h12a1 1 0 00.84-.46 1 1 0 00.07-1A21.11 21.11 0 0117.27 12zm-.75 8h-9a24.77 24.77 0 001.25-8 24.77 24.77 0 00-1.29-8h9a24.77 24.77 0 00-1.25 8 24.77 24.77 0 001.29 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPanoramaV);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;