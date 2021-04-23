import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgInbox(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.056 2h-14a3.003 3.003 0 00-3 3v14a3.003 3.003 0 003 3h14a3.003 3.003 0 003-3V5a3.003 3.003 0 00-3-3zm-14 2h14a1.001 1.001 0 011 1v8H17.59a1.997 1.997 0 00-1.664.89L14.52 16H9.59l-1.406-2.11A1.997 1.997 0 006.52 13H4.056V5a1.001 1.001 0 011-1zm14 16h-14a1.001 1.001 0 01-1-1v-4H6.52l1.406 2.11A1.997 1.997 0 009.59 18h4.93a1.997 1.997 0 001.664-.89L17.59 15h2.465v4a1.001 1.001 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgInbox);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;