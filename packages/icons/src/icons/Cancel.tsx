import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCancel(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.77 11.36l-5-6A1 1 0 0016 5H5a3 3 0 00-3 3v8a3 3 0 003 3h11a1 1 0 00.77-.36l5-6a1 1 0 000-1.28zM15.53 17H5a1 1 0 01-1-1V8a1 1 0 011-1h10.53l4.17 5zm-2.82-7.71a1 1 0 00-1.42 0L10 10.59l-1.29-1.3a1 1 0 10-1.42 1.42L8.59 12l-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l1.29-1.3 1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42L11.41 12l1.3-1.29a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCancel);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
