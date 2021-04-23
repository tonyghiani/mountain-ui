import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgNotebooks(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 6a1 1 0 00-1 1v10a3 3 0 01-3 3H7a1 1 0 000 2h10a5 5 0 005-5V7a1 1 0 00-1-1zm-3 9V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3zM10 4h2v4.86l-.36-.3a1 1 0 00-1.28 0l-.36.3zM4 15V5a1 1 0 011-1h3v7a1 1 0 001.65.76L11 10.63l1.35 1.13A1 1 0 0013 12a1.06 1.06 0 00.42-.09A1 1 0 0014 11V4h1a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgNotebooks);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;