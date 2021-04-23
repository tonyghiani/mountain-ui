import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTag(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.12 10.71l-8.41-8.42A1 1 0 0012 2H3a1 1 0 00-1 1v9a1 1 0 00.29.71l8.42 8.41a3 3 0 004.24 0L21.12 15a3 3 0 000-4.24zm-1.41 2.82l-6.18 6.17a1 1 0 01-1.41 0L4 11.59V4h7.59l8.12 8.12a1 1 0 01.29.71 1 1 0 01-.29.7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTag);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;