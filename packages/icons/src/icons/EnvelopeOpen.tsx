import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelopeOpen(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.21 8.82L14 2.78a2.83 2.83 0 00-3.9 0l-6.21 6A2.6 2.6 0 003 10.71v8.58A2.75 2.75 0 005.78 22h12.44A2.75 2.75 0 0021 19.29v-8.58a2.67 2.67 0 00-.79-1.89zm-8.77-4.6a.83.83 0 011.12 0L18 9.5l-5.47 5.28a.83.83 0 01-1.12 0L6 9.5zM19 19.29a.76.76 0 01-.78.71H5.78a.76.76 0 01-.78-.71v-7.94l4.05 3.9-1.66 1.6a1 1 0 000 1.41 1 1 0 00.72.31 1 1 0 00.69-.28l1.77-1.7a2.8 2.8 0 002.92 0l1.77 1.7a1 1 0 00.69.28 1 1 0 00.72-.31 1 1 0 000-1.41L15 15.25l4-3.9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeOpen);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;