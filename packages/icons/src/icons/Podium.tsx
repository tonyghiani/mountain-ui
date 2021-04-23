import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPodium(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.79 7.13a1 1 0 00-.79-.38H8v-.5a2 2 0 011.46-1.92 1.5 1.5 0 001 .42h1a1.5 1.5 0 000-3h-1a1.49 1.49 0 00-1.17.57A4 4 0 006 6.25v.5H5a1 1 0 00-.79.38A1 1 0 004 8l.62 2.49a3 3 0 002.48 2.22l.78 7H7a1 1 0 000 2h10a1 1 0 000-2h-.88l.78-7a3 3 0 002.45-2.23L20 8a1 1 0 00-.21-.87zM14.1 19.75H9.9l-.78-7h5.76zM17.41 10a1 1 0 01-1 .76H7.56a1 1 0 01-1-.76l-.28-1.25h11.44z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPodium);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;