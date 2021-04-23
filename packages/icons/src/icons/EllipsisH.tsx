import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEllipsisH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 10a2 2 0 102 2 2 2 0 00-2-2zm-7 0a2 2 0 102 2 2 2 0 00-2-2zm14 0a2 2 0 102 2 2 2 0 00-2-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEllipsisH);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;