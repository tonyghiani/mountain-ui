import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgStopwatch(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.3 8.59l.91-.9a1 1 0 00-1.42-1.42l-.9.91a8 8 0 00-9.79 0l-.91-.92a1 1 0 00-1.42 1.43l.92.91A7.92 7.92 0 004 13.5a8 8 0 1014.3-4.91zM12 19.5a6 6 0 116-6 6 6 0 01-6 6zm-2-15h4a1 1 0 000-2h-4a1 1 0 000 2zm3 6a1 1 0 00-2 0v1.89a1.5 1.5 0 102 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStopwatch);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
