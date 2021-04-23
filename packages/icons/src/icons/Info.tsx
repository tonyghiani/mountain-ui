import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgInfo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 10a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm0-4a1.25 1.25 0 101.25 1.25A1.25 1.25 0 0012 6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgInfo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
