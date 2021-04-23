import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgExclamationTriangle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 16a1 1 0 101 1 1 1 0 00-1-1zm10.67 1.47l-8.05-14a3 3 0 00-5.24 0l-8 14A3 3 0 003.94 22h16.12a3 3 0 002.61-4.53zm-1.73 2a1 1 0 01-.88.51H3.94a1 1 0 01-.88-.51 1 1 0 010-1l8-14a1 1 0 011.78 0l8.05 14a1 1 0 01.05 1.02zM12 8a1 1 0 00-1 1v4a1 1 0 002 0V9a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgExclamationTriangle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;