import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWordpressSimple = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2M3.01 12a8.96 8.96 0 0 1 .778-3.66l4.289 11.751A8.99 8.99 0 0 1 3.009 12M12 20.99a9 9 0 0 1-2.54-.366l2.698-7.839 2.763 7.572a1 1 0 0 0 .065.123 9 9 0 0 1-2.986.51m1.239-13.207c.541-.028 1.03-.085 1.03-.085a.372.372 0 0 0-.058-.741s-1.457.114-2.397.114c-.883 0-2.368-.114-2.368-.114a.372.372 0 0 0-.057.741s.459.057.943.085l1.401 3.838-1.968 5.901-3.274-9.739c.542-.028 1.03-.085 1.03-.085a.372.372 0 0 0-.058-.741s-1.456.114-2.396.114c-.169 0-.368-.004-.579-.01A8.988 8.988 0 0 1 18.071 5.37q-.057-.006-.116-.008a1.557 1.557 0 0 0-1.51 1.596 4.2 4.2 0 0 0 .883 2.109 4.74 4.74 0 0 1 .741 2.48 10.9 10.9 0 0 1-.684 2.906l-.897 2.996Zm3.281 11.987 2.746-7.94a8.5 8.5 0 0 0 .684-3.22 7 7 0 0 0-.06-.925 8.99 8.99 0 0 1-3.37 12.085' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWordpressSimple);
export default ForwardRef;
