import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgSilentSquint(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.66 12.21a1 1 0 00.71.29 1 1 0 00.71-.29l1.5-1.5a1 1 0 000-1.42l-1.5-1.5a1 1 0 00-1.42 1.42l.8.79-.8.79a1 1 0 000 1.42zm7.5 0a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42l-.79-.79.79-.79a1 1 0 10-1.42-1.42l-1.5 1.5a1 1 0 000 1.42zm.11 2a1 1 0 00-1.2 0l-.74.55-.73-.55a1 1 0 00-1.2 0l-.73.55-.74-.55a1 1 0 00-1.2 0l-1.33 1a1 1 0 101.2 1.6l.73-.55.74.55a.67.67 0 00.12.06.83.83 0 00.22.08h.48a1.12 1.12 0 00.33-.16l.73-.55.73.55a1 1 0 001 .11l.1-.05a.39.39 0 00.11-.06l.74-.55.73.55a1 1 0 00.6.2 1 1 0 00.8-.4 1 1 0 00-.2-1.4zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSilentSquint);
export default ForwardRef;
