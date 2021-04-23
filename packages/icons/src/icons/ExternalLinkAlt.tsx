import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgExternalLinkAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 10.82a1 1 0 00-1 1V19a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h7.18a1 1 0 000-2H5a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3v-7.18a1 1 0 00-1-1zm3.92-8.2a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 000 2h3.59L8.29 14.29a1 1 0 000 1.42 1 1 0 001.42 0L20 5.41V9a1 1 0 002 0V3a1 1 0 00-.08-.38z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgExternalLinkAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
