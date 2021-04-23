import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTablet(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1zm-5.29-2.71a1 1 0 00-.91-.29l-.18.06a.76.76 0 00-.18.09l-.15.12a1 1 0 00-.21.33 1 1 0 00.21 1.09 1.46 1.46 0 00.33.22 1 1 0 001.09-.22A1 1 0 0013 17a.84.84 0 00-.08-.38 1.15 1.15 0 00-.21-.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTablet);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
