import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPricetagAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 6a1 1 0 101 1 1 1 0 00-1-1zm14.71 5.78l-9.48-9.46A1 1 0 0011.5 2h-6a1 1 0 00-.71.29l-2.5 2.49a1 1 0 00-.29.71v6a1.05 1.05 0 00.29.71l9.49 9.5a1.05 1.05 0 00.71.29 1 1 0 00.71-.29l8.51-8.51a1 1 0 00.29-.71 1.05 1.05 0 00-.29-.7zm-9.22 7.81L4 11.09V5.9L5.9 4h5.18l8.5 8.49z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPricetagAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;