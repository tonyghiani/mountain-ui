import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgSitemap(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 15h-2v-3a1 1 0 00-1-1h-6V9h2a1 1 0 001-1V2a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 001 1h2v2H5a1 1 0 00-1 1v3H2a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H6v-2h12v2h-2a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zM7 17v4H3v-4zm3-10V3h4v4zm11 14h-4v-4h4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSitemap);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
