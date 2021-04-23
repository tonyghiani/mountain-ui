import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBalanceScale(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22.964 13.823a.948.948 0 00-.028-.175l-2.305-6.137A2.996 2.996 0 0022 5a1 1 0 00-2 0 1 1 0 01-1.882.473A2.893 2.893 0 0015.54 4H13V3a1 1 0 00-2 0v1H8.46a2.893 2.893 0 00-2.578 1.473A1 1 0 014 5a1 1 0 00-2 0 2.996 2.996 0 001.369 2.511l-2.305 6.137a.948.948 0 00-.028.175A.949.949 0 001 14c0 .01.003.018.003.027 0 .013.003.025.004.039a3.994 3.994 0 007.986 0c.001-.014.004-.026.004-.039 0-.01.003-.018.003-.027a.949.949 0 00-.036-.177.948.948 0 00-.028-.175L6.629 7.504A2.99 2.99 0 007.643 6.42.917.917 0 018.46 6H11v14H8a1 1 0 000 2h8a1 1 0 000-2h-3V6h2.54a.917.917 0 01.817.42 2.99 2.99 0 001.014 1.084l-2.307 6.144a.948.948 0 00-.028.175A.949.949 0 0015 14c0 .01.003.018.003.027 0 .013.003.025.004.039a3.994 3.994 0 007.986 0c.001-.014.004-.026.004-.039 0-.01.003-.018.003-.027a.949.949 0 00-.036-.177zM5 8.856L6.556 13H3.444zM6.723 15A2.023 2.023 0 015 16a2 2 0 01-1.731-1zM19 8.856L20.556 13h-3.112zM19 16a2 2 0 01-1.731-1h3.454A2.023 2.023 0 0119 16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBalanceScale);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;