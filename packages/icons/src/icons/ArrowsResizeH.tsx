import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgArrowsResizeH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 6a1 1 0 00-1 1v4H5.41l.8-.79a1 1 0 00-1.42-1.42l-2.5 2.5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l2.5 2.5a1 1 0 001.42 0 1 1 0 000-1.42l-.8-.79H9v4a1 1 0 002 0V7a1 1 0 00-1-1zm11.92 5.62a1 1 0 00-.21-.33l-2.5-2.5a1 1 0 00-1.42 1.42l.8.79H15V7a1 1 0 00-2 0v10a1 1 0 002 0v-4h3.59l-.8.79a1 1 0 000 1.42 1 1 0 001.42 0l2.5-2.5a1 1 0 00.21-.33 1 1 0 000-.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowsResizeH);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;