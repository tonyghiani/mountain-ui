import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHtml5Alt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.468 2.325A1 1 0 0020.73 2H3.27a1 1 0 00-.996 1.089l1.52 17a1 1 0 00.728.874l7.2 2a.996.996 0 00.268.037 1.012 1.012 0 00.267-.036l7.22-2a1 1 0 00.729-.875l1.52-17a1 1 0 00-.258-.764zm-3.193 16.896l-6.284 1.741-6.266-1.74L4.363 4h15.274zM7.82 13h6.895l-.327 3.271-2.568.917-3.164-1.13a1 1 0 10-.673 1.884l3.5 1.25a1.003 1.003 0 00.673 0l3.5-1.25a1 1 0 00.659-.842l.5-5a1 1 0 00-.995-1.1H8.725l-.3-3h7.895a1 1 0 000-2h-9a1 1 0 00-.995 1.1l.5 5a1 1 0 00.995.9z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHtml5Alt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
