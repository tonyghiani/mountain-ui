import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArchiveAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 13h4a1 1 0 000-2h-4a1 1 0 000 2zm9-10H5a3 3 0 00-1 5.82V18a3 3 0 003 3h10a3 3 0 003-3V8.82A3 3 0 0019 3zm-1 15a1 1 0 01-1 1H7a1 1 0 01-1-1V9h12zm1-11H5a1 1 0 010-2h14a1 1 0 010 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArchiveAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;