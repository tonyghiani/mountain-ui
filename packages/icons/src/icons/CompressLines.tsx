import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCompressLines(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 20h-4v-3.59l.79.8a1 1 0 001.42 0 1 1 0 000-1.42l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1 1 0 001.42 1.42l.79-.8V20H7a1 1 0 000 2h10a1 1 0 000-2zM7 4h4v3.59l-.79-.8a1 1 0 10-1.42 1.42l2.5 2.5a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1 1 0 10-1.42-1.42l-.79.8V4h4a1 1 0 000-2H7a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCompressLines);
export default ForwardRef;
