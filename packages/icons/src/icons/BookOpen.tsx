import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBookOpen(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.17 2.06A13.1 13.1 0 0019 1.87a12.94 12.94 0 00-7 2.05 12.94 12.94 0 00-7-2 13.1 13.1 0 00-2.17.19 1 1 0 00-.83 1v12a1 1 0 001.17 1 10.9 10.9 0 018.25 1.91l.12.07h.11a.91.91 0 00.7 0h.11l.12-.07A10.9 10.9 0 0120.83 16 1 1 0 0022 15V3a1 1 0 00-.83-.94zM11 15.35a12.87 12.87 0 00-6-1.48H4v-10a8.69 8.69 0 011 0 10.86 10.86 0 016 1.8zm9-1.44h-1a12.87 12.87 0 00-6 1.48V5.67a10.86 10.86 0 016-1.8 8.69 8.69 0 011 0zm1.17 4.15a13.1 13.1 0 00-2.17-.19 12.94 12.94 0 00-7 2.05 12.94 12.94 0 00-7-2.05 13.1 13.1 0 00-2.17.19A1 1 0 002 19.21a1 1 0 001.17.79 10.9 10.9 0 018.25 1.91 1 1 0 001.16 0A10.9 10.9 0 0120.83 20a1 1 0 001.17-.79 1 1 0 00-.83-1.15z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBookOpen);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;