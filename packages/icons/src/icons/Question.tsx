import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.333 9.5A3.5 3.5 0 008.8 7.75a1 1 0 001.733 1A1.503 1.503 0 0111.833 8a1.5 1.5 0 110 3h-.003a.95.95 0 00-.19.039 1.032 1.032 0 00-.198.04.983.983 0 00-.155.105 1.008 1.008 0 00-.162.11 1.005 1.005 0 00-.117.174.978.978 0 00-.097.144 1.023 1.023 0 00-.043.212.948.948 0 00-.035.176v1l.002.011v.491a1 1 0 001 .998h.003a1 1 0 00.998-1.002l-.002-.662A3.494 3.494 0 0015.333 9.5zm-4.203 6.79a1 1 0 00.7 1.71 1.036 1.036 0 00.71-.29 1.015 1.015 0 000-1.42 1.034 1.034 0 00-1.41 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgQuestion);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
