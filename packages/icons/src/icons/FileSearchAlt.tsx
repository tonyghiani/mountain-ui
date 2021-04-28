import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileSearchAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 20H5a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v1a1 1 0 002 0V9v-.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H5a3 3 0 00-3 3v14a3 3 0 003 3h7a1 1 0 000-2zm0-14.59L14.59 8H13a1 1 0 01-1-1zM7 8a1 1 0 000 2h1a1 1 0 000-2zm14.71 12.29l-1.17-1.16A3.44 3.44 0 0020 15a3.49 3.49 0 00-6 2.49 3.46 3.46 0 005.13 3.05l1.16 1.17a1 1 0 001.42 0 1 1 0 000-1.42zm-3.17-1.75a1.54 1.54 0 01-2.11 0 1.5 1.5 0 01-.43-1.05 1.46 1.46 0 01.44-1.06 1.48 1.48 0 011-.43A1.47 1.47 0 0119 17.49a1.5 1.5 0 01-.46 1.05zM13 12H7a1 1 0 000 2h6a1 1 0 000-2zm-2 6a1 1 0 000-2H7a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileSearchAlt);
export default ForwardRef;
