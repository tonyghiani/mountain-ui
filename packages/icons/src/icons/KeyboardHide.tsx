import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgKeyboardHide(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.71 10.29a1.15 1.15 0 00-.33-.21 1 1 0 00-1.09.21 1 1 0 00-.21.33 1 1 0 00.21 1.09 1.15 1.15 0 00.33.21 1 1 0 001.3-1.3 1 1 0 00-.21-.33zm2.58-2.58A1 1 0 0010 8a.84.84 0 00.38-.08 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1.15 1.15 0 00-.21-.33 1 1 0 00-1.42 0 1.15 1.15 0 00-.21.33.94.94 0 000 .76 1.15 1.15 0 00.21.33zM6.71 6.29A1 1 0 005 7a1 1 0 00.08.38 1.15 1.15 0 00.21.33A1 1 0 006 8a.84.84 0 00.38-.08 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1.15 1.15 0 00-.21-.33zm6.58 12L12 19.59l-1.29-1.3a1 1 0 00-1.42 1.42l2 2a1 1 0 001.42 0l2-2a1 1 0 00-1.42-1.42zm5.42-12A1 1 0 0017 7a.84.84 0 00.08.38 1.15 1.15 0 00.21.33 1 1 0 001.42 0 1.15 1.15 0 00.21-.33A.84.84 0 0019 7a1 1 0 00-.08-.38 1.15 1.15 0 00-.21-.33zM14 10h-4a1 1 0 000 2h4a1 1 0 000-2zm6-8H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3V5a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h16a1 1 0 011 1zm-2.29-2.71a1 1 0 00-.33-.21.92.92 0 00-.76 0 1.15 1.15 0 00-.33.21A1.05 1.05 0 0017 11a1 1 0 101.92-.38 1 1 0 00-.21-.33zm-5.09-4.21a1.15 1.15 0 00-.33.21A1.05 1.05 0 0013 7a1 1 0 00.08.38 1.15 1.15 0 00.21.33A1 1 0 0014 8a.84.84 0 00.38-.08 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33A.84.84 0 0015 7a1.05 1.05 0 00-.29-.71 1 1 0 00-1.09-.21z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKeyboardHide);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;