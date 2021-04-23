import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCaretRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.5 11.13l-14-8.08a1 1 0 00-1 0 1 1 0 00-.5.87v16.16a1 1 0 00.5.87 1 1 0 001 0l14-8.08a1 1 0 000-1.74zM6 18.35V5.65L17 12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCaretRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
