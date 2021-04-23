import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgFileLanscapeSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 10.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09a.88.88 0 00-.33-.11h-4.39a1 1 0 000 2H14v3a3 3 0 003 3h3v3.34a1 1 0 102 0V11v-.06zM17 10a1 1 0 01-1-1V7.41L18.59 10zM3.71 2.29a1 1 0 00-1.42 1.42l.91.9A3 3 0 002 7v10a3 3 0 003 3h13.59l1.7 1.71a1 1 0 001.42 0 1 1 0 000-1.42zM5 18a1 1 0 01-1-1V7a1 1 0 01.66-.93L16.59 18z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileLanscapeSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
