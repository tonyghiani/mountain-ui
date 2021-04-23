import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLinkAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.11 15.39l-3.88 3.88a2.52 2.52 0 01-3.5 0 2.47 2.47 0 010-3.5l3.88-3.88a1 1 0 10-1.42-1.42l-3.88 3.89a4.48 4.48 0 006.33 6.33l3.89-3.88a1 1 0 00-1.42-1.42zm8.58-12.08a4.49 4.49 0 00-6.33 0l-3.89 3.88a1 1 0 101.42 1.42l3.88-3.88a2.52 2.52 0 013.5 0 2.47 2.47 0 010 3.5l-3.88 3.88a1 1 0 000 1.42 1 1 0 001.42 0l3.88-3.89a4.49 4.49 0 000-6.33zM8.83 15.17a1 1 0 00.71.29 1 1 0 00.71-.29l4.92-4.92a1 1 0 10-1.42-1.42l-4.92 4.92a1 1 0 000 1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLinkAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
