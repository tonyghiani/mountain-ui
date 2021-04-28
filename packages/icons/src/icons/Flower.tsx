import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFlower(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.68 6.88a4.4 4.4 0 00-3.31-.32 4.37 4.37 0 00-8.73 0 4.48 4.48 0 00-3.31.29 4.37 4.37 0 00.61 8 4.4 4.4 0 00-.8 2.5 5 5 0 00.07.75 4.34 4.34 0 004.29 3.63 4.68 4.68 0 00.64 0A4.42 4.42 0 0012 20a4.42 4.42 0 002.86 1.69 4.68 4.68 0 00.64 0 4.36 4.36 0 003.56-6.87 4.36 4.36 0 00.62-8zm-9.34-1.94a2.4 2.4 0 013.32 0 2.43 2.43 0 01.52 2.66l-.26.59-.66.58A4.07 4.07 0 0012 8.55a4 4 0 00-1.61.34L9.83 7.6a2.39 2.39 0 01.51-2.66zm-6.1 6.84A2.37 2.37 0 017.94 9l.49.43.35.8A3.92 3.92 0 008 12.55 2.85 2.85 0 008 13h-.55l-.84.08a2.37 2.37 0 01-2.37-1.3zm6.6 6.08a2.38 2.38 0 01-4.66-.08 3.07 3.07 0 010-.42 2.33 2.33 0 011.17-2l.51-.36.91-.1a4 4 0 002.38 1.57zM12 14.55a2 2 0 112-2 2 2 0 01-2 2zm5.82 3.22a2.36 2.36 0 01-2.68 1.94 2.39 2.39 0 01-2-1.85l-.14-.6.21-.92a4 4 0 002.2-1.76l.5.3H16l.66.39a2.38 2.38 0 011.16 2.5zm1.94-6a2.39 2.39 0 01-2.13 1.33h-.24l-.64-.1-.75-.41a4 4 0 00-1-2.64l.43-.37.63-.58a2.37 2.37 0 013.7 2.82z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFlower);
export default ForwardRef;
