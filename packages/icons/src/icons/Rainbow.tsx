import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgRainbow(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5 12a1 1 0 000 2 5 5 0 015 5 1 1 0 002 0 7 7 0 00-7-7zm0-8a1 1 0 000 2 13 13 0 0113 13 1 1 0 002 0A15 15 0 005 4zm0 4a1 1 0 000 2 9 9 0 019 9 1 1 0 002 0A11 11 0 005 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRainbow);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;