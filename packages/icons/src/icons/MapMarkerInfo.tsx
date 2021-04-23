import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMapMarkerInfo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 10a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm8.46-.32A8.5 8.5 0 007.3 3.36a8.56 8.56 0 00-3.76 6.27A8.46 8.46 0 006 16.46l5.3 5.31a1 1 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.37l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24zm-3.68-7.48a.56.56 0 00-.09-.17l-.12-.15A1 1 0 0011.8 7h-.18l-.18.09-.15.13-.12.15a.56.56 0 00-.09.17.6.6 0 00-.06.19A1.23 1.23 0 0011 8a.88.88 0 00.08.39 1.11 1.11 0 00.21.32 1.06 1.06 0 00.33.22 1.07 1.07 0 00.76 0 1.19 1.19 0 00.33-.22 1.11 1.11 0 00.21-.32A1 1 0 0013 8a1.23 1.23 0 000-.19.6.6 0 00-.08-.24z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMapMarkerInfo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;