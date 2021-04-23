import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHeadSideMask(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.23 2.003a7.367 7.367 0 00-5.453 2.114A7.441 7.441 0 005.5 9.465l-1.844 2.998a.995.995 0 00-.156.52v.04a1 1 0 00.07.347l1.44 3.873c.012.034.027.067.043.099A2.984 2.984 0 007.736 19H8.5v2a1 1 0 002 0v-2h2a1 1 0 00.321-.053l3.7-1.256a.999.999 0 00.018.12l1 3.466A1.001 1.001 0 0018.5 22a1.018 1.018 0 00.277-.04 1 1 0 00.684-1.237l-.924-3.2 1.93-7.267A1.031 1.031 0 0020.5 10v-.228a7.698 7.698 0 00-7.27-7.769zM11.5 17H7.736a.995.995 0 01-.874-.513L5.938 14H11.5zm5.523-1.591L13.5 16.605V13.72l4.345-1.448zm1.412-5.389a.973.973 0 00-.251.031L12.337 12H6.29l1.074-1.747a1 1 0 00.148-.562L7.5 9.5a5.455 5.455 0 011.67-3.947 5.522 5.522 0 014-1.55 5.685 5.685 0 015.33 5.77z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHeadSideMask);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;