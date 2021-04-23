import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBackspace(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 5H9.83a3 3 0 00-2.12.88l-5.42 5.41a1 1 0 000 1.42l5.42 5.41a3 3 0 002.12.88H19a3 3 0 003-3V8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H9.83a1.05 1.05 0 01-.71-.29L4.41 12l4.71-4.71A1.05 1.05 0 019.83 7H19a1 1 0 011 1zm-3.29-6.71a1 1 0 00-1.42 0L14 10.59l-1.29-1.3a1 1 0 00-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l1.29-1.3 1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42L15.41 12l1.3-1.29a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBackspace);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;