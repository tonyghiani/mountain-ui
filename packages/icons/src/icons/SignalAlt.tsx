import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSignalAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 14a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm-5 4a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zM20 2a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1zm-5 7a1 1 0 00-1 1v11a1 1 0 002 0V10a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSignalAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;