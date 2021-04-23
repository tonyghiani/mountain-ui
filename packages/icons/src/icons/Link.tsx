import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLink(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 17.55l-1.77 1.72a2.47 2.47 0 01-3.5-3.5l4.54-4.55a2.46 2.46 0 013.39-.09l.12.1a1 1 0 001.4-1.43 2.75 2.75 0 00-.18-.21 4.46 4.46 0 00-6.09.22l-4.6 4.55a4.48 4.48 0 006.33 6.33L11.37 19A1 1 0 0010 17.55zM20.69 3.31a4.49 4.49 0 00-6.33 0L12.63 5A1 1 0 0014 6.45l1.73-1.72a2.47 2.47 0 013.5 3.5l-4.54 4.55a2.46 2.46 0 01-3.39.09l-.12-.1a1 1 0 00-1.4 1.43 2.75 2.75 0 00.23.21 4.47 4.47 0 006.09-.22l4.55-4.55a4.49 4.49 0 00.04-6.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLink);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;