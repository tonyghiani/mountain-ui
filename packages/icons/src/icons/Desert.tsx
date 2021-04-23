import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDesert(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 2a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2zm-3 12h-2v-2a1 1 0 00-2 0v2H9v-3.38l3.45-1.73A1 1 0 0013 14v-4a1 1 0 00-2 0v3.38l-2 1V8a1 1 0 00-2 0v8.38l-2-1V13a1 1 0 00-2 0v3a1 1 0 00.55.89L7 18.62V20H3a1 1 0 000 2h12a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDesert);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
