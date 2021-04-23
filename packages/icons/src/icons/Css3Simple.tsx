import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCss3Simple(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.772 3.364A1 1 0 0020 3H6a1 1 0 000 2h12.786l-.78 4H5a1 1 0 000 2h12.615l-1.163 5.955-6.323 1.997-5.41-1.7.203-1.064a1 1 0 00-1.964-.375l-.37 1.94a1 1 0 00.682 1.141l6.56 2.06a1.002 1.002 0 00.601 0l7.19-2.27a1 1 0 00.68-.763l2.68-13.73a1 1 0 00-.209-.827z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCss3Simple);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
