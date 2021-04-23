import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgThunderstormSun(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.58 16.5h-1.26l.86-1.5a1 1 0 10-1.73-1l-1.73 3a1 1 0 00.86 1.5h1.27L9 20a1 1 0 001.74 1l1.73-3a1 1 0 000-1 1 1 0 00-.89-.5zm9.42-9h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 4.3v-.8a1 1 0 00-2 0v.8a4.25 4.25 0 00-1.27.52l-.56-.56a1 1 0 00-1.41 1.41l.56.57c-.09.15-.16.32-.24.48a5.85 5.85 0 00-1.58-.22 6 6 0 00-5.94 5.13 3.49 3.49 0 00-.34 6.62 1 1 0 10.72-1.86 1.5 1.5 0 01.56-2.89 1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.33 2.33 0 01.25 4.53 1 1 0 00.27 2 .84.84 0 00.27 0 4.3 4.3 0 002.85-5.72l.13.13a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.56-.56a4.25 4.25 0 00.52-1.35h.8a1 1 0 000-2zm-3.34 2.65a2.28 2.28 0 01-.6.41A4.17 4.17 0 0016 10a6.12 6.12 0 00-2.09-2.49 2.42 2.42 0 01.46-.7 2.43 2.43 0 013.3 0 2.37 2.37 0 010 3.3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgThunderstormSun);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;