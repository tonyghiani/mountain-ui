import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgYinYang(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 15.5a1 1 0 101 1 1 1 0 00-1-1zM12 2a5.545 5.545 0 00-.562.029A9.993 9.993 0 0012 22a5.545 5.545 0 00.562-.029A9.993 9.993 0 0012 2zm0 18A7.989 7.989 0 016.71 6.015 5.484 5.484 0 0012 13a3.5 3.5 0 010 7zm5.29-2.015A5.484 5.484 0 0012 11a3.5 3.5 0 010-7 7.989 7.989 0 015.29 13.985zM12 6.5a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgYinYang);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;