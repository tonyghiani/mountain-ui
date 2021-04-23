import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGlassMartiniAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.78 3.62a1 1 0 00.12-1.05A1 1 0 0021 2H3a1 1 0 00-.9.57 1 1 0 00.12 1.05L11 14.6V20H5.25a1 1 0 000 2h13.5a1 1 0 000-2H13v-5.4zM5.08 4h13.84l-2.4 3h-9zM12 12.65L9.08 9h5.84z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGlassMartiniAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
