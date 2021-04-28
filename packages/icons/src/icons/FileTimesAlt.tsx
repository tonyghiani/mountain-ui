import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileTimesAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 12H8a1 1 0 000 2h6a1 1 0 000-2zm5.41 7l1.3-1.29a1 1 0 00-1.42-1.42L18 17.59l-1.29-1.3a1 1 0 00-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l1.29-1.3 1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42zM12 20H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v3a1 1 0 002 0V9v-.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.29.29 0 00-.1 0 1.1 1.1 0 00-.31-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h6a1 1 0 000-2zm1-14.59L15.59 8H14a1 1 0 01-1-1zM8 8a1 1 0 000 2h1a1 1 0 000-2zm4 8H8a1 1 0 000 2h4a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileTimesAlt);
export default ForwardRef;
