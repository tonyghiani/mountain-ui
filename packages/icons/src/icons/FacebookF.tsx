import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFacebookF(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.12 5.32H17V2.14A26.11 26.11 0 0014.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFacebookF);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
