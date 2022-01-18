import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgAlignCenterJustify(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 15H3a1 1 0 000 2h18a1 1 0 000-2zM3 5h18a1 1 0 000-2H3a1 1 0 000 2zm14 14H7a1 1 0 000 2h10a1 1 0 000-2zm4-12H3a1 1 0 000 2h18a1 1 0 000-2zm0 4H3a1 1 0 000 2h18a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAlignCenterJustify);
export default ForwardRef;
