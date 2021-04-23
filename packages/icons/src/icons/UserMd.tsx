import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgUserMd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.899 13.229l-.005-.002c-.063-.027-.124-.058-.188-.083A5.988 5.988 0 0018 8.434a5.29 5.29 0 00-.045-.63.946.946 0 00.038-.122l.281-2.397a3.006 3.006 0 00-2.442-3.302l-.79-.143a16.931 16.931 0 00-6.083 0l-.791.143a3.006 3.006 0 00-2.442 3.302l.28 2.397a.946.946 0 00.039.122 5.29 5.29 0 00-.045.63 5.988 5.988 0 002.294 4.71c-.064.025-.125.056-.188.083l-.005.002a9.948 9.948 0 00-6.035 8.097 1 1 0 001.988.217 7.948 7.948 0 014.216-6.185l3.023 3.023a1 1 0 001.414 0l3.023-3.023a7.948 7.948 0 014.216 6.185 1 1 0 00.992.892 1.048 1.048 0 00.11-.006 1 1 0 00.886-1.103 9.948 9.948 0 00-6.036-8.097zM7.712 5.051a1.002 1.002 0 01.814-1.1l.79-.143a14.93 14.93 0 015.368 0l.79.143a1.002 1.002 0 01.814 1.1l-.178 1.514H7.89zM12 16.261l-1.65-1.651a7.85 7.85 0 013.3 0zm0-3.826a4.005 4.005 0 01-3.998-3.87h7.996A4.005 4.005 0 0112 12.435z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUserMd);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;