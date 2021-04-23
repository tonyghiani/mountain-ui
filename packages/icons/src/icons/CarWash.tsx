import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCarWash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.5 4a1 1 0 00.71-.29l1-1a1 1 0 00-1.42-1.42l-1 1a1 1 0 000 1.42A1 1 0 007.5 4zm4 0a1 1 0 00.71-.29l1-1a1 1 0 10-1.42-1.42l-1 1a1 1 0 000 1.42 1 1 0 00.71.29zm4 0a1 1 0 00.71-.29l1-1a1 1 0 10-1.42-1.42l-1 1a1 1 0 000 1.42 1 1 0 00.71.29zm2.42 11.62a.76.76 0 00-.09-.18l-.12-.15-.15-.12a.76.76 0 00-.18-.09.6.6 0 00-.19-.06 1 1 0 00-.9.27 1.58 1.58 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 00.29.7.91.91 0 00.33.22A1 1 0 0017 17a1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.08-.18zm1.84-4.51L18.4 7.05a3 3 0 00-2.84-2H8.44a3 3 0 00-2.84 2l-1.36 4.06A3 3 0 002 14v4a3 3 0 002 2.82V22a1 1 0 002 0v-1h12v1a1 1 0 002 0v-1.18A3 3 0 0022 18v-4a3 3 0 00-2.24-2.89zM7.49 7.68A1 1 0 018.44 7h7.12a1 1 0 011 .68L17.61 11H6.39zM20 18a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h14a1 1 0 011 1zm-7-3h-2a1 1 0 000 2h2a1 1 0 000-2zm-5.08.62a.76.76 0 00-.09-.18l-.12-.15a1 1 0 00-1.09-.21 1 1 0 00-.33.21 1.58 1.58 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.08.18 1.36 1.36 0 000 .2 1 1 0 001.71.7A1 1 0 008 16a1.36 1.36 0 000-.2.64.64 0 00-.08-.18z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCarWash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;