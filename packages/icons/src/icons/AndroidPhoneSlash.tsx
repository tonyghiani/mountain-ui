import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgAndroidPhoneSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 17.71a1 1 0 001.42 0 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1.15 1.15 0 00-.21-.33 1 1 0 00-1.42 0 1.15 1.15 0 00-.21.33.94.94 0 000 .76 1.15 1.15 0 00.21.33zM8.66 4H16a1 1 0 011 1v7.34a1 1 0 002 0V5a3 3 0 00-3-3H8.66a1 1 0 000 2zm13.05 16.29l-18-18a1 1 0 00-1.42 1.42L5 6.41V19a3 3 0 003 3h8a3 3 0 002.76-1.83l1.53 1.54a1 1 0 001.42 0 1 1 0 000-1.42zM17 19a1 1 0 01-1 1H8a1 1 0 01-1-1V8.41l10 10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAndroidPhoneSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
