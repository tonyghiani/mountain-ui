import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgChat(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 2H6a3 3 0 00-3 3v11a3 3 0 003 3h2.59l2.7 2.71A1 1 0 0012 22a1 1 0 00.65-.24L15.87 19H18a3 3 0 003-3V5a3 3 0 00-3-3zm1 14a1 1 0 01-1 1h-2.5a1 1 0 00-.65.24l-2.8 2.4-2.34-2.35A1 1 0 009 17H6a1 1 0 01-1-1V5a1 1 0 011-1h12a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgChat);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;