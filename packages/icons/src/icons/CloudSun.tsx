import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudSun(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 9h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 5.8V5a1 1 0 00-2 0v.8a4.1 4.1 0 00-1.26.52l-.57-.56a1 1 0 00-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.85 5.85 0 0010.5 8a6 6 0 00-5.94 5.13A3.5 3.5 0 005.5 20h9.17A4.33 4.33 0 0019 15.67a4.19 4.19 0 00-.3-1.55l.13.12a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.56-.56A4.25 4.25 0 0020.2 11h.8a1 1 0 000-2zm-6.33 9H5.5a1.5 1.5 0 010-3 1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.33 2.33 0 01-.39 4.62zm3-6.35a2.17 2.17 0 01-.6.4 4.49 4.49 0 00-1.07-.51 6.12 6.12 0 00-2.09-2.49 2.25 2.25 0 01.46-.69 2.42 2.42 0 013.29 0 2.37 2.37 0 010 3.3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudSun);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;