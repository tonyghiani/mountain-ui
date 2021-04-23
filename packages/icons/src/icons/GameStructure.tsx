import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGameStructure(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 18h-2v-3a1 1 0 00-1-1h-5v-2.71l1.13.59a1 1 0 001.45-1.05l-.4-2.37 1.72-1.69a1 1 0 00.26-1 1 1 0 00-.81-.68L14 4.72l-1.1-2.16a1 1 0 00-1.8 0L10 4.72l-2.39.35a1 1 0 00-.81.68 1 1 0 00.26 1l1.76 1.71-.4 2.37a1 1 0 001.45 1.05l1.13-.59V14H6a1 1 0 00-1 1v3H3a1 1 0 00-1 1v2a1 1 0 002 0v-1h4v1a1 1 0 002 0v-2a1 1 0 00-1-1H7v-2h10v2h-2a1 1 0 00-1 1v2a1 1 0 002 0v-1h4v1a1 1 0 002 0v-2a1 1 0 00-1-1zm-9-9.37a1 1 0 00-.47.12l-.8.42.15-.9a1 1 0 00-.29-.88l-.65-.64.9-.13a1 1 0 00.76-.54l.4-.82.4.82a1 1 0 00.76.54l.9.13-.65.64a1 1 0 00-.29.88l.15.9-.8-.42a1 1 0 00-.47-.12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGameStructure);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;