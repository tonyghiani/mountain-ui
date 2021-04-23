import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgThSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.71 21.29l-1-1-6-6-6-6-6-6-1-1a1 1 0 00-1.42 1.42l.71.7V21a1 1 0 001 1h17.59l.7.71a1 1 0 001.42 0 1 1 0 000-1.42zM4 5.41L6.59 8H4zM8 20H4v-4h4zm0-6H4v-4h4zm2-2.59L12.59 14H10zM14 20h-4v-4h4zm2 0v-2.59L18.59 20zM8.67 4H14v5a1 1 0 001 1h5v5.33a1 1 0 102 0V3a1 1 0 00-1-1H8.67a1 1 0 000 2zM16 4h4v4h-4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgThSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
