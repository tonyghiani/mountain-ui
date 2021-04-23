import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSubwayAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 17h1a1 1 0 000-2h-1a1 1 0 000 2zm6 0V9a3 3 0 00-3-3h-5V4h4a1 1 0 000-2H7a1 1 0 000 2h4v2H6a3 3 0 00-3 3v8a3 3 0 001.2 2.39l-.91.9a1 1 0 000 1.42 1 1 0 001.42 0L6.41 20h11.18l1.7 1.71a1 1 0 001.42 0 1 1 0 000-1.42l-.91-.9A3 3 0 0021 17zM5 9a1 1 0 011-1h5v4H5zm14 8a1 1 0 01-1 1H6a1 1 0 01-1-1v-3h14zm0-5h-6V8h5a1 1 0 011 1zM8 17h1a1 1 0 000-2H8a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSubwayAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;