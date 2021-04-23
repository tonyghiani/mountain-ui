import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M21.707 11.293l-8-8A1 1 0 0012 4v3.545A11.015 11.015 0 002 18.5V20a1 1 0 001.784.62 11.456 11.456 0 017.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 001.707.707l8-8a1 1 0 000-1.414zM14 17.586V15.5a1 1 0 00-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 00-7.386 2.948A9.013 9.013 0 0113 9.5a1 1 0 001-1V6.414L19.586 12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;