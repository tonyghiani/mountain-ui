import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMapMarkerQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.44 13.11l-.17-.11a1 1 0 00-1.09.22.87.87 0 00-.22.32 1 1 0 00-.08.39 1 1 0 00.08.38 1.07 1.07 0 00.54.54 1 1 0 00.38.08 1.09 1.09 0 00.39-.08 1 1 0 00.32-.22 1 1 0 000-1.41zM11.88 6A2.75 2.75 0 009.5 7.32a1 1 0 101.73 1 .77.77 0 01.65-.32.75.75 0 110 1.5 1 1 0 100 2 2.75 2.75 0 100-5.5zm8.58 3.68A8.5 8.5 0 007.3 3.36a8.56 8.56 0 00-3.76 6.27A8.46 8.46 0 006 16.46l5.3 5.31a1 1 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.37l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMapMarkerQuestion);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;