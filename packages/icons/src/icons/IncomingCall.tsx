import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgIncomingCall(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.55 9a1.07 1.07 0 00.39.07h4a1 1 0 000-2h-1.59l3.29-3.29a1 1 0 10-1.41-1.41l-3.29 3.28V4.06a1 1 0 10-2 0v4a1.07 1.07 0 00.07.39 1 1 0 00.54.55zm3.89 4c-.22 0-.45-.07-.67-.12a9.44 9.44 0 01-1.31-.39 2 2 0 00-2.48 1l-.22.45a12.18 12.18 0 01-2.66-2 12.18 12.18 0 01-2-2.66l.42-.28a2 2 0 001-2.48 10.33 10.33 0 01-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 00-3-2.49h-3a3 3 0 00-3 3.41 19 19 0 0016.52 16.46h.38a3 3 0 002-.76 3 3 0 001-2.25v-3a3 3 0 00-2.47-2.9zm.5 6a1 1 0 01-.34.75 1.06 1.06 0 01-.82.25A17 17 0 014.07 5.22a1.09 1.09 0 01.25-.82 1 1 0 01.75-.34h3a1 1 0 011 .79q.06.41.15.81a11.12 11.12 0 00.46 1.55l-1.4.65a1 1 0 00-.49 1.33 14.49 14.49 0 007 7 1 1 0 00.76 0 1 1 0 00.57-.52l.62-1.4a13.69 13.69 0 001.58.46q.4.09.81.15a1 1 0 01.79 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgIncomingCall);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;