import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgFileTimes(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.71 12.29a1 1 0 00-1.42 0L12 13.59l-1.29-1.3a1 1 0 00-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l1.29-1.3 1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42L13.41 15l1.3-1.29a1 1 0 000-1.42zM20 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.1a1.1 1.1 0 00-.31-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileTimes);
export default ForwardRef;
