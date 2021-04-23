import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTrademark(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.5 7h-6a1 1 0 000 2h2v7a1 1 0 002 0V9h2a1 1 0 000-2zm11.92.62a1 1 0 00-.54-.54 1 1 0 00-.76 0 1 1 0 00-.33.21L17 10.09l-2.79-2.8a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.54.54 1 1 0 00-.08.38v8a1 1 0 002 0v-5.59l1.79 1.8a1 1 0 001.42 0l1.79-1.8V16a1 1 0 002 0V8a1 1 0 00-.08-.38z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTrademark);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
