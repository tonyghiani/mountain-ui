import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSwatchbook(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 16a1 1 0 101 1 1 1 0 00-1-1zm12.06-4l1.23-1.23a3 3 0 000-4.24l-2.83-2.82a3 3 0 00-4.24 0L12 4.94A3 3 0 009 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3v-4a3 3 0 00-2.94-3zM10 19a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h4a1 1 0 011 1zm2-11.24l2.64-2.64a1 1 0 011.41 0L18.88 8a1 1 0 010 1.41L16 12.29l-4 3.95zM20 19a1 1 0 01-1 1h-7.18a3.12 3.12 0 00.17-.92L17.07 14H19a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSwatchbook);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;