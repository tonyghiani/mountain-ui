import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFacebookMessenger(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a9.65 9.65 0 00-10 9.7 9.51 9.51 0 003.14 7.18.81.81 0 01.27.56v1.78a.81.81 0 001.13.71l2-.87a.75.75 0 01.53 0 11 11 0 002.9.38A9.7 9.7 0 1012 2zm6 7.46l-2.93 4.66a1.5 1.5 0 01-2.17.4l-2.34-1.75a.6.6 0 00-.72 0l-3.16 2.4a.47.47 0 01-.68-.63l2.93-4.66a1.5 1.5 0 012.17-.4l2.34 1.75a.6.6 0 00.72 0l3.16-2.4a.47.47 0 01.68.63z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFacebookMessenger);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
