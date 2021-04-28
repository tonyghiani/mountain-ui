import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHtml3Alt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.952 8h6.986l-.177 2h-4.77a1 1 0 000 2h4.593l-.264 2.977-2.329.528-2.328-.529-.096-1.064a1 1 0 10-1.992.177l.16 1.79a1.001 1.001 0 00.775.887l3.26.74a1.019 1.019 0 00.443 0l3.26-.74a1.001 1.001 0 00.775-.888l.432-4.868.002-.01-.001-.004.346-3.908A1.001 1.001 0 0016.031 6H7.952a1 1 0 000 2zm12.702-5.674A1.002 1.002 0 0019.916 2H4.066a1 1 0 00-.996 1.09l1.444 16.194a.999.999 0 00.727.874l6.473 1.805a.99.99 0 00.537 0l6.49-1.812a.999.999 0 00.728-.874l1.443-16.188a1.002 1.002 0 00-.258-.763zM17.538 18.41l-5.556 1.551-5.538-1.545L5.16 4h13.664z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHtml3Alt);
export default ForwardRef;
