import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgStoreSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.7 4h9.623l1.661 4.154A1.995 1.995 0 0116 8a1 1 0 00-2 0 1.826 1.826 0 01-.134.709 1 1 0 00.543 1.305.947.947 0 00.174.035A3.988 3.988 0 0018 12v1.3a1 1 0 002 0v-1.856a3.985 3.985 0 001.996-3.405c0-.01.003-.018.003-.028L22 8a.949.949 0 00-.035-.171.952.952 0 00-.036-.2l-2-5A1 1 0 0019 2H8.7a1 1 0 100 2zm14.007 17.293l-2.933-2.933a.943.943 0 00-.154-.154l-9.95-9.95a.973.973 0 00-.206-.206L5.182 3.768a.963.963 0 00-.128-.128L2.707 1.293a1 1 0 00-1.414 1.414l1.964 1.964-1.178 2.94-.007.017a.953.953 0 00-.035.189A.948.948 0 002 8l.001.012.003.024A3.986 3.986 0 004 11.444V21a1 1 0 001 1h14a.993.993 0 00.93-.656l1.363 1.363a1 1 0 001.414-1.414zM4.016 8.153l.778-1.945L7.67 9.084A1.972 1.972 0 016 10a1.996 1.996 0 01-1.984-1.846zM9 15v5H6v-8a3.964 3.964 0 003.102-1.484L12.586 14H10a1 1 0 00-1 1zm4 5h-2v-4h2zm5 0h-3v-3.586l3 3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStoreSlash);
export default ForwardRef;
