import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudMoonMeatball(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.7 8a1 1 0 00-.94-.26 3 3 0 01-.65.08 3 3 0 01-3-3 3.05 3.05 0 01.08-.66 1 1 0 00-.26-.94 1 1 0 00-.93-.28 5 5 0 00-3.83 4.22 5.86 5.86 0 00-1.67-.24A6 6 0 004.56 12 3.52 3.52 0 002 15.42a3.47 3.47 0 001.41 2.79 1 1 0 101.18-1.61A1.46 1.46 0 014 15.42a1.5 1.5 0 011.5-1.5 1 1 0 001-1 4 4 0 016.17-3.35 3.9 3.9 0 011.57 2 1 1 0 00.78.66 2.33 2.33 0 01.54 4.44 1 1 0 00-.52 1.32 1 1 0 00.92.6 1 1 0 00.4-.09 4.33 4.33 0 002.6-4 4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 8.92a1 1 0 00-.3-.92zm-4.59 2.82a2.72 2.72 0 01-.42 0 4.6 4.6 0 00-.72-.31 5.91 5.91 0 00-1.82-2.28v-.37a3 3 0 011.05-2.28 5 5 0 004.23 4.22 3 3 0 01-2.32 1.01zm-4.61 6.1h-.77l.39-.67a1 1 0 00-1.74-1l-.38.67-.38-.67a1 1 0 00-1.74 1l.39.67H7.5a1 1 0 000 2h.77l-.39.66a1 1 0 001.74 1l.38-.66.38.66a1 1 0 101.74-1l-.39-.66h.77a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudMoonMeatball);
export default ForwardRef;
