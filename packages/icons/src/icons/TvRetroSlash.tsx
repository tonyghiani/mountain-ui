import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTvRetroSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.62 7.92A1 1 0 0012 8h6a1 1 0 011 1v5.34a1 1 0 102 0V9a3 3 0 00-3-3h-3.59l2.3-2.29a1 1 0 10-1.42-1.42l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.54.54zm10.09 12.37l-18-18a1 1 0 00-1.42 1.42l2.54 2.53A3 3 0 003 9v8a3 3 0 003 3v1a1 1 0 002 0v-1h8v1a1 1 0 002 0v-1a3.07 3.07 0 00.53-.06l1.76 1.77a1 1 0 001.42 0 1 1 0 000-1.42zM6 18a1 1 0 01-1-1V9a1 1 0 011-1h.59l10 10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTvRetroSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;