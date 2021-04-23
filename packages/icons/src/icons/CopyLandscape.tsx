import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCopyLandscape(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 19H6a3 3 0 01-3-3V8a1 1 0 00-2 0v8a5 5 0 005 5h12a1 1 0 000-2zm5-9.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09L16.06 3H8a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-4-.06zm-6-3.53L19.59 9H18a1 1 0 01-1-1zM21 14a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1h7v3a3 3 0 003 3h3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCopyLandscape);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;