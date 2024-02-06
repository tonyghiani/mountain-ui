import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgStoreSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.7 4h9.623l1.661 4.154A1.995 1.995 0 0 1 16 8a1 1 0 0 0-2 0 1.8 1.8 0 0 1-.134.709 1 1 0 0 0 .543 1.305 1 1 0 0 0 .174.035A3.99 3.99 0 0 0 18 12v1.3a1 1 0 0 0 2 0v-1.856a3.99 3.99 0 0 0 1.996-3.405q.002-.014.003-.028L22 8a1 1 0 0 0-.035-.171 1 1 0 0 0-.036-.2l-2-5A1 1 0 0 0 19 2H8.7a1 1 0 1 0 0 2m14.007 17.293-2.933-2.933a1 1 0 0 0-.154-.154l-9.95-9.95a1 1 0 0 0-.206-.206L5.182 3.768a1 1 0 0 0-.128-.128L2.707 1.293a1 1 0 0 0-1.414 1.414l1.964 1.964-1.178 2.94-.007.017a1 1 0 0 0-.035.189A1 1 0 0 0 2 8l.001.012.003.024A3.99 3.99 0 0 0 4 11.444V21a1 1 0 0 0 1 1h14a.99.99 0 0 0 .93-.656l1.363 1.363a1 1 0 0 0 1.414-1.414M4.016 8.153l.778-1.945L7.67 9.084A1.97 1.97 0 0 1 6 10a1.996 1.996 0 0 1-1.984-1.846M9 15v5H6v-8a3.96 3.96 0 0 0 3.102-1.484L12.586 14H10a1 1 0 0 0-1 1m4 5h-2v-4h2Zm5 0h-3v-3.586l3 3Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgStoreSlash);
export default ForwardRef;
