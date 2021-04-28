import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSocialDistancing(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.5 17H5.914l.293-.293a1 1 0 00-1.414-1.414l-2 2a1.004 1.004 0 000 1.414l2 2a1 1 0 001.414-1.414L5.914 19H8.5a1 1 0 000-2zm12.707.293l-2-2a1 1 0 00-1.414 1.414l.293.293H15.5a1 1 0 000 2h2.586l-.293.293a1 1 0 101.414 1.414l2-2a1.004 1.004 0 000-1.414zm-.567-7.521A3.468 3.468 0 0021.5 7.5a3.5 3.5 0 00-7 0 3.468 3.468 0 00.86 2.272A4.988 4.988 0 0013 14a1 1 0 002 0 3 3 0 016 0 1 1 0 002 0 4.988 4.988 0 00-2.36-4.228zM18 9a1.5 1.5 0 111.5-1.5A1.502 1.502 0 0118 9zm-9.36.772A3.468 3.468 0 009.5 7.5a3.5 3.5 0 00-7 0 3.468 3.468 0 00.86 2.272A4.988 4.988 0 001 14a1 1 0 002 0 3 3 0 016 0 1 1 0 002 0 4.988 4.988 0 00-2.36-4.228zM6 9a1.5 1.5 0 111.5-1.5A1.502 1.502 0 016 9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSocialDistancing);
export default ForwardRef;
