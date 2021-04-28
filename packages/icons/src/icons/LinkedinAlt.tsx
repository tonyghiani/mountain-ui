import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLinkedinAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.5 8.999a5.419 5.419 0 00-2.565.645A1 1 0 0014 8.999h-4a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-5.5a1 1 0 112 0v5.5a1 1 0 001 1h4a1 1 0 001-1v-7.5a5.507 5.507 0 00-5.5-5.5zm3.5 12h-2v-4.5a3 3 0 10-6 0v4.5h-2v-10h2v.703a1 1 0 001.781.625A3.483 3.483 0 0121 14.5zm-14-12H3a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-12a1 1 0 00-1-1zm-1 12H4v-10h2zM5.015 1.542a3.233 3.233 0 10-.057 6.457h.028a3.233 3.233 0 10.029-6.457zm-.029 4.457h-.028a1.222 1.222 0 01-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 016.41 4.771c0 .746-.56 1.228-1.425 1.228z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLinkedinAlt);
export default ForwardRef;
