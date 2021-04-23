import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileUploadAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13 20H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v2a1 1 0 002 0V9v-.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h7a1 1 0 000-2zm0-14.59L15.59 8H14a1 1 0 01-1-1zM8 8a1 1 0 000 2h1a1 1 0 000-2zm6 4H8a1 1 0 000 2h6a1 1 0 000-2zm6.71 5.29l-2-2a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2 2a1 1 0 001.42 1.42l.29-.3V21a1 1 0 002 0v-2.59l.29.3a1 1 0 001.42 0 1 1 0 000-1.42zM12 18a1 1 0 000-2H8a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileUploadAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;