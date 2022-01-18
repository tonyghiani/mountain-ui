import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgAnnoyedAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M14.66 13.56l-4.19 1.5A1 1 0 0010.8 17a1 1 0 00.34-.06l4.2-1.5a1 1 0 10-.68-1.88zm-4-5a1 1 0 00-1.41 0 1 1 0 01-1.42 0 1 1 0 00-1.41 0 1 1 0 000 1.42 3 3 0 004.24 0 1 1 0 00-.04-1.44zm7 0a1 1 0 00-1.41 0 1 1 0 01-1.42 0 1 1 0 00-1.41 0 1 1 0 000 1.42 3 3 0 004.24 0 1 1 0 00-.04-1.44zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAnnoyedAlt);
export default ForwardRef;
