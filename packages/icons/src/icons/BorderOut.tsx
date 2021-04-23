import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBorderOut(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 9a1 1 0 10-1-1 1 1 0 001 1zm0 4a1 1 0 10-1-1 1 1 0 001 1zm4 0a1 1 0 10-1-1 1 1 0 001 1zm-4 4a1 1 0 10-1-1 1 1 0 001 1zm8-14H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zm-1 16H5V5h14zM8 13a1 1 0 10-1-1 1 1 0 001 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBorderOut);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
