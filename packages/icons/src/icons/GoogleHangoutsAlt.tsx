import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGoogleHangoutsAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.992 7.69a2 2 0 000 4l.015-.001v.501a.501.501 0 01-.5.5 1 1 0 000 2 2.502 2.502 0 002.5-2.5v-2.5a.941.941 0 00-.03-.15 1.994 1.994 0 00-1.985-1.85zm3-6.688a9.787 9.787 0 00-1 19.523v1.477a1 1 0 001.238.97 12.535 12.535 0 009.467-10.974 9.734 9.734 0 00-9.706-10.996zm7.717 10.78a10.548 10.548 0 01-6.718 8.86v-1.066a1 1 0 00-1-1 7.787 7.787 0 117.788-7.787 7.945 7.945 0 01-.07.993zM14.992 7.69a2 2 0 100 4l.015-.001v.501a.501.501 0 01-.5.5 1 1 0 000 2 2.502 2.502 0 002.5-2.5v-2.5a.941.941 0 00-.03-.15 1.994 1.994 0 00-1.985-1.85z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGoogleHangoutsAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;