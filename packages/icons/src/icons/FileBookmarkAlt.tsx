import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileBookmarkAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7.5 10h1a1 1 0 000-2h-1a1 1 0 000 2zm4 6h-4a1 1 0 000 2h4a1 1 0 000-2zm0-4h-4a1 1 0 000 2h4a1 1 0 000-2zm6.92-2.62a1 1 0 00-.21-1.09l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0l-.28-.1H5.5a3 3 0 00-3 3v14a3 3 0 003 3h6a1 1 0 000-2h-6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h4a1 1 0 00.92-.62zM13.5 8a1 1 0 01-1-1V5.41L15.09 8zm7 4h-5a1 1 0 00-1 1v8a1 1 0 00.53.88 1 1 0 001-.05l1.97-1.3 2 1.3a1 1 0 001.5-.83v-8a1 1 0 00-1-1zm-1 7.12l-.94-.63a1 1 0 00-1.12 0l-.94.63V14h3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileBookmarkAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;