import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDatabaseAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 17a1 1 0 101 1 1 1 0 00-1-1zm0-6a1 1 0 101 1 1 1 0 00-1-1zm8-9H8a4 4 0 00-4 4v12a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4zm2 16a2 2 0 01-2 2H8a2 2 0 01-2-2v-2.56A3.91 3.91 0 008 16h8a3.91 3.91 0 002-.56zm0-6a2 2 0 01-2 2H8a2 2 0 01-2-2V9.44A3.91 3.91 0 008 10h8a3.91 3.91 0 002-.56zm-2-4H8a2 2 0 010-4h8a2 2 0 010 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDatabaseAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
