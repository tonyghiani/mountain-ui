import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgKayak(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.12 16.88a3 3 0 00-3.4-.58l-1.15-1.14a24 24 0 005.21-8.86 3.19 3.19 0 00-4.08-4.08 24 24 0 00-8.86 5.21L7.7 6.28a3 3 0 10-4.82.84A3 3 0 005 8a3 3 0 001.28-.3l1.15 1.14a24 24 0 00-5.21 8.86A3.24 3.24 0 003 21a3.17 3.17 0 002.22 1 3.74 3.74 0 001.08-.17 24 24 0 008.86-5.21l1.14 1.15a3 3 0 104.82-.84zM5.71 5.7a1 1 0 01-1.42-1.41A1 1 0 015.71 5.7zm12.6-1.57a1.6 1.6 0 01.47-.08 1.16 1.16 0 01.83.34 1.23 1.23 0 01.26 1.3 22.09 22.09 0 01-2.13 4.64l-4.07-4.07a22.09 22.09 0 014.64-2.13zM5.69 19.87a1.2 1.2 0 01-1.56-1.56 22.09 22.09 0 012.13-4.64l4.07 4.07a22.09 22.09 0 01-4.64 2.13zM12 16.59L7.41 12a21.29 21.29 0 011.43-1.74l4.91 4.91A21.29 21.29 0 0112 16.59zm3.15-2.84l-4.9-4.91A21.29 21.29 0 0112 7.41l4.6 4.6a21.29 21.29 0 01-1.44 1.74zm4.55 6a1 1 0 11-1.42-1.41 1 1 0 011.41 0 1 1 0 01.02 1.37z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKayak);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;