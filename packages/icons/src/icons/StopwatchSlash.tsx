import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgStopwatchSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.6 5.63a1 1 0 00.36 2 6.18 6.18 0 011-.09 6 6 0 016 6 6.18 6.18 0 01-.09 1 1 1 0 00.8 1.16h.18a1 1 0 001-.82A7.45 7.45 0 0020 13.5a8 8 0 00-1.7-4.91l.91-.9a1 1 0 00-1.42-1.42l-.9.91A8 8 0 0012 5.5a7.45 7.45 0 00-1.4.13zM10 4.5h4a1 1 0 000-2h-4a1 1 0 000 2zm3.49 9.08v-.08-.08l1.34-1.33a1 1 0 10-1.42-1.42L12.08 12h-.16L5.71 5.79a1 1 0 00-1.42 1.42l.48.48.91.91A8 8 0 0016.9 19.82l1.39 1.39a1 1 0 001.42 0 1 1 0 000-1.42zM12 19.5A6 6 0 017.11 10l3.4 3.39v.08A1.5 1.5 0 0012 15h.08l3.39 3.4A6 6 0 0112 19.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStopwatchSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;