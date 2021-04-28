import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHourglass(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.992 21.002h-1v-1.667a5 5 0 00-.3-1.678.969.969 0 00-.036-.084 4.977 4.977 0 00-.664-1.237l-1.4-1.867a3.02 3.02 0 01-.6-1.801v-1.01a3.021 3.021 0 01.878-2.12l.657-.658a4.946 4.946 0 001.397-2.839c0-.013.008-.025.008-.04l-.003-.013a5.018 5.018 0 00.063-.643V3.002h1a1 1 0 000-2h-14a1 1 0 000 2h1v2.343a5.018 5.018 0 00.063.643l-.003.014c0 .014.007.026.008.04A4.946 4.946 0 007.456 8.88l.657.657a3.021 3.021 0 01.879 2.121v1.01a3.022 3.022 0 01-.6 1.8l-1.4 1.868a4.982 4.982 0 00-.665 1.237.976.976 0 00-.036.084 5.003 5.003 0 00-.3 1.678v1.667h-1a1 1 0 000 2h14a1 1 0 000-2zm-11-16v-2h8v2zm.878 2.464a2.97 2.97 0 01-.377-.464h6.997a2.97 2.97 0 01-.377.464l-.657.657a4.96 4.96 0 00-1.422 2.879H10.95a4.96 4.96 0 00-1.422-2.879zm1.122 8.202a5.037 5.037 0 00.988-2.666h2.023a5.033 5.033 0 00.989 2.666l1 1.334h-6zm6 5.334h-8v-1.667a2.954 2.954 0 01.027-.333h7.945a2.954 2.954 0 01.028.333z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHourglass);
export default ForwardRef;
