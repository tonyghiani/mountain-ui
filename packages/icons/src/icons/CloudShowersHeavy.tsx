import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudShowersHeavy(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.89 18.06a1 1 0 00-1.28.6l-.73 2a1 1 0 00.6 1.28 1 1 0 00.34.06 1 1 0 00.94-.66l.73-2a1 1 0 00-.6-1.28zm-4 0a1 1 0 00-1.28.6l-.73 2a1 1 0 00.6 1.28 1 1 0 00.34.06 1 1 0 00.94-.66l.73-2a1 1 0 00-.6-1.28zm0-7a1 1 0 00-1.28.6l-1.1 3A1 1 0 007.45 16a1 1 0 00.94-.66l1.1-3a1 1 0 00-.6-1.28zm4 0a1 1 0 00-1.28.6l-1.1 3a1 1 0 00.94 1.34 1 1 0 00.94-.66l1.1-3a1 1 0 00-.6-1.28zm5.53-4.84A7 7 0 005.06 8.11 4 4 0 002 12a4 4 0 001.34 3 1 1 0 101.32-1.5A2 2 0 014 12a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 11a2.91 2.91 0 01-.74 2 1 1 0 001.48 1.34 5 5 0 00-2.32-8.08zm-1.53 11.84a1 1 0 00-1.28.6l-.73 2a1 1 0 00.6 1.28 1 1 0 00.34.06 1 1 0 00.94-.66l.73-2a1 1 0 00-.6-1.28zm0-7a1 1 0 00-1.28.6l-1.1 3a1 1 0 00.94 1.34 1 1 0 00.94-.66l1.1-3a1 1 0 00-.6-1.28z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudShowersHeavy);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
