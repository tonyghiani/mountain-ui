import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDocumentLayoutCenter(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 12h6a1 1 0 001-1V5a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h4v4h-4zm11 4h-2a1 1 0 000 2h2a1 1 0 000-2zm-2-2h2a1 1 0 000-2h-2a1 1 0 000 2zM3 8h2a1 1 0 000-2H3a1 1 0 000 2zm0 4h2a1 1 0 000-2H3a1 1 0 000 2zm18 2H3a1 1 0 000 2h18a1 1 0 000-2zm-8 4H3a1 1 0 000 2h10a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDocumentLayoutCenter);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;