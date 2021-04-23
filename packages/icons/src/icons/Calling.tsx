import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCalling(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.47 9a1 1 0 10-1-1 1 1 0 001 1zm-3 0a1 1 0 10-1-1 1 1 0 001 1zm-3 0a1 1 0 10-1-1 1 1 0 001 1zm4.44 4c-.22 0-.45-.07-.67-.12a9.44 9.44 0 01-1.31-.39 2 2 0 00-2.48 1l-.22.45a12.48 12.48 0 01-2.67-2 12.83 12.83 0 01-2-2.66L10 9a2 2 0 001-2.48 10.33 10.33 0 01-.39-1.31c-.05-.23-.09-.45-.12-.68a3 3 0 00-3-2.49h-3a3 3 0 00-2.24 1 3 3 0 00-.73 2.39A19 19 0 0018 21.91a2.56 2.56 0 00.39 0 3 3 0 003-3v-3A3 3 0 0018.91 13zm.49 6a1 1 0 01-1.15 1 17.12 17.12 0 01-9.87-4.85 17.14 17.14 0 01-4.84-9.93 1 1 0 01.25-.82 1 1 0 01.74-.34h3a1 1 0 011 .79q.06.41.15.81a11.12 11.12 0 00.46 1.55l-1.4.65a1 1 0 00-.49 1.33 14.49 14.49 0 007 7 1 1 0 00.76 0 1 1 0 00.56-.52l.63-1.4a13.69 13.69 0 001.58.46c.26.06.54.11.81.15a1 1 0 01.78 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCalling);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;