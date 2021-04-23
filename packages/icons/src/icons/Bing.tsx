import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBing(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.1 8.6l1.7 4.3 2.8 1.3L9 17.5V3.4L5 2v17.8L9 22l10-5.8v-4.5l-8.9-3.1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBing);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
