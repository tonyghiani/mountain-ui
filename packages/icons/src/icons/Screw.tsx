import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgScrew(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 10.12l-7.83-7.83a1 1 0 00-1.7.57L11.45 8l-2 2-.33-.19A1 1 0 008 11.44l-1.15 1.17-.33-.19a1 1 0 00-1.11 1.63l-1.17 1.16-.32-.21a1 1 0 00-1.37.37 1 1 0 00.25 1.26l-.51.51a.93.93 0 00-.21.33 1 1 0 00-.08.38V21a1 1 0 001 1h3.13a1 1 0 00.38-.08.93.93 0 00.33-.21L8.54 20l.33.19a1 1 0 001.37-.36 1 1 0 00-.24-1.27l1.17-1.16.33.19a1 1 0 00.49.13 1 1 0 00.6-1.72l1.17-1.16.33.19a1 1 0 00.49.13 1 1 0 00.62-1.77l.79-.79 5.15-.73a1 1 0 00.81-.68 1 1 0 00-.24-1.07zM5.72 20H4v-1.72l.57-.57L6.75 19zm2.49-2.5L6 16.25l1.14-1.14 2.17 1.25zm2.61-2.6l-2.18-1.26 1.15-1.14L12 13.75zm2.61-2.61L11.25 11l1.14-1.14 1.72 1.72zm2.45-1.74l-2.43-2.43.43-3 5 5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgScrew);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;