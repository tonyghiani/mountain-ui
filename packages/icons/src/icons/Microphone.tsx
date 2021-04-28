import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgMicrophone(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 15a4 4 0 004-4V5a4 4 0 00-8 0v6a4 4 0 004 4zM10 5a2 2 0 014 0v6a2 2 0 01-4 0zm10 6a1 1 0 00-2 0 6 6 0 01-12 0 1 1 0 00-2 0 8 8 0 007 7.93V21H9a1 1 0 000 2h6a1 1 0 000-2h-2v-2.07A8 8 0 0020 11z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMicrophone);
export default ForwardRef;
