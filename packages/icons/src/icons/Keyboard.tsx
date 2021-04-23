import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgKeyboard(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.21 13.29a.93.93 0 00-.33-.21 1 1 0 00-.76 0 .9.9 0 00-.54.54 1 1 0 101.84 0 1 1 0 00-.21-.33zM13.5 11h1a1 1 0 000-2h-1a1 1 0 000 2zm-4 0h1a1 1 0 000-2h-1a1 1 0 000 2zm-3-2h-1a1 1 0 000 2h1a1 1 0 000-2zM20 5H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h16a1 1 0 011 1zm-6-3H9a1 1 0 000 2h6a1 1 0 000-2zm3.5-4h-1a1 1 0 000 2h1a1 1 0 000-2zm.71 4.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 .93.93 0 00-.33.21 1 1 0 00-.21.33 1 1 0 101.92.38.84.84 0 00-.08-.38 1 1 0 00-.21-.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKeyboard);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;