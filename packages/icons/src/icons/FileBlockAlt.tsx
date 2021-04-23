import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileBlockAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 8a1 1 0 000 2h1a1 1 0 000-2zm5 12H5a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v1a1 1 0 002 0V9v-.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0L11.06 2H5a3 3 0 00-3 3v14a3 3 0 003 3h7a1 1 0 000-2zm0-14.59L14.59 8H13a1 1 0 01-1-1zm8.83 9.76a4.1 4.1 0 00-5.66 0 4 4 0 105.66 0zM16 18a2 2 0 012-2 2.09 2.09 0 01.51.07l-2.44 2.44A2.09 2.09 0 0116 18zm3.41 1.41a2 2 0 01-1.91.5l2.43-2.42A2.09 2.09 0 0120 18a2 2 0 01-.59 1.41zM11 18a1 1 0 000-2H7a1 1 0 000 2zm2-6H7a1 1 0 000 2h6a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileBlockAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;