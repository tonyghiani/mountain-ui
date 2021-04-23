import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgVoicemail(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 8a4 4 0 00-4 4 3.91 3.91 0 00.56 2H9.44a3.91 3.91 0 00.56-2 4 4 0 10-4 4h12a4 4 0 000-8zM6 14a2 2 0 112-2 2 2 0 01-2 2zm12 0a2 2 0 112-2 2 2 0 01-2 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVoicemail);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
