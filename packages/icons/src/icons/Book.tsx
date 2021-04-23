import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgBook(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 6H9a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1zm-1 4h-4V8h4zm3-8H5a1 1 0 00-1 1v18a1 1 0 001 1h12a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H6V4h11a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBook);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
