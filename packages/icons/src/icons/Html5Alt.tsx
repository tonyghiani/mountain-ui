import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHtml5Alt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M21.468 2.325A1 1 0 0 0 20.73 2H3.27a1 1 0 0 0-.996 1.089l1.52 17a1 1 0 0 0 .728.874l7.2 2a1 1 0 0 0 .268.037 1 1 0 0 0 .267-.036l7.22-2a1 1 0 0 0 .729-.875l1.52-17a1 1 0 0 0-.258-.764m-3.193 16.896-6.284 1.741-6.266-1.74L4.363 4h15.274ZM7.82 13h6.895l-.327 3.271-2.568.917-3.164-1.13a1 1 0 1 0-.673 1.884l3.5 1.25a1 1 0 0 0 .673 0l3.5-1.25a1 1 0 0 0 .659-.842l.5-5a1 1 0 0 0-.995-1.1H8.725l-.3-3h7.895a1 1 0 0 0 0-2h-9a1 1 0 0 0-.995 1.1l.5 5a1 1 0 0 0 .995.9' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHtml5Alt);
export default ForwardRef;
