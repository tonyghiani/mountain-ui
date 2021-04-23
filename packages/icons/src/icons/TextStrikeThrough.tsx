import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgTextStrikeThrough(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 13H9a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2zm2-7H7a1 1 0 000 2h4v2a1 1 0 002 0V8h4a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTextStrikeThrough);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
