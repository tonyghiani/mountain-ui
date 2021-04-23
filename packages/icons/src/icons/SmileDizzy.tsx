import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSmileDizzy(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.36 14.23a3.76 3.76 0 01-4.72 0 1 1 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1 1 0 10-1.28-1.54zM9 11.71l.29-.3.29.3a1 1 0 001.42 0 1 1 0 000-1.42l-.3-.29.3-.29a1 1 0 00-1.46-1.42l-.29.3-.25-.3a1 1 0 10-1.46 1.42l.3.29-.3.29a1 1 0 000 1.42 1 1 0 001.42 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm5-11.71a1 1 0 00-1.42 0l-.29.3-.29-.3a1 1 0 00-1.42 1.42l.3.29-.3.29a1 1 0 000 1.42 1 1 0 001.42 0l.29-.3.29.3a1 1 0 001.42 0 1 1 0 000-1.42l-.3-.29.3-.29a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSmileDizzy);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
