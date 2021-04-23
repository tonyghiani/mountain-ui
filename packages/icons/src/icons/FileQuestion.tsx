import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.57 17.29a1 1 0 00-1.41 0 1.06 1.06 0 00-.22.33 1.07 1.07 0 000 .76 1.19 1.19 0 00.22.33 1 1 0 00.32.21 1 1 0 00.39.08 1 1 0 00.92-1.38.91.91 0 00-.22-.33zM20 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09a.88.88 0 00-.33-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3zm-6.13-9a3 3 0 00-2.6 1.5 1 1 0 101.73 1 1 1 0 01.87-.5 1 1 0 010 2 1 1 0 100 2 3 3 0 000-6z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileQuestion);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;