import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgObjectGroup(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16 10h-2V8a1 1 0 00-1-1H8a1 1 0 00-1 1v5a1 1 0 001 1h2v2a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-6 1v1H9V9h3v1h-1a1 1 0 00-1 1zm5 4h-3v-3h3zm6 3.28V5.72A2 2 0 1018.28 3H5.72A2 2 0 103 5.72v12.56A2 2 0 105.72 21h12.56A2 2 0 1021 18.28zm-2 0a1.91 1.91 0 00-.72.72H5.72a1.91 1.91 0 00-.72-.72V5.72A1.91 1.91 0 005.72 5h12.56a1.91 1.91 0 00.72.72z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgObjectGroup);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
