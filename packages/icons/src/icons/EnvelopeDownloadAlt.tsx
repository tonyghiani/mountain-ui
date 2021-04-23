import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelopeDownloadAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 8.79a1 1 0 001.42 0l2-2a1 1 0 000-1.41 1 1 0 00-1.42 0l-.29.29V2.92a1 1 0 00-2 0v2.75l-.29-.29a1 1 0 00-1.42 0 1 1 0 000 1.41zM16 11.08H8a3 3 0 00-3 3v5a3 3 0 003 3h8a3 3 0 003-3v-5a3 3 0 00-3-3zm-.42 2L12.7 16a1 1 0 01-1.4 0l-2.88-2.92zm1.42 6a1 1 0 01-1 1H8a1 1 0 01-1-1v-4.59l2.88 2.88a3 3 0 004.24 0L17 14.49z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeDownloadAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;