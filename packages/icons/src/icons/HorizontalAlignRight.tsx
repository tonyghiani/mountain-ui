import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHorizontalAlignRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2a1 1 0 00-1 1v3H9a1 1 0 00-1 1v3H3a1 1 0 00-1 1v6a1 1 0 001 1h17v3a1 1 0 002 0V3a1 1 0 00-1-1zm-1 14H4v-4h16zm0-6H10V8h10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHorizontalAlignRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
