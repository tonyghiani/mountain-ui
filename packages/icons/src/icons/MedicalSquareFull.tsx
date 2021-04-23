import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMedicalSquareFull(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 18H4V4h16zM7 14.79h2v2a1 1 0 001 1h4a1 1 0 001-1v-2h2a1 1 0 001-1v-4a1 1 0 00-1-1h-2v-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v2H7a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2a1 1 0 001-1v-2h2v2a1 1 0 001 1h2v2h-2a1 1 0 00-1 1v2h-2v-2a1 1 0 00-1-1H8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMedicalSquareFull);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;