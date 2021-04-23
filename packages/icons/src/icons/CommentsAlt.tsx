import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCommentsAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 8h-1V5a3 3 0 00-3-3H5a3 3 0 00-3 3v12a1 1 0 00.62.92A.84.84 0 003 18a1 1 0 00.71-.29l2.81-2.82H8v1.44a3 3 0 003 3h6.92l2.37 2.38A1 1 0 0021 22a.84.84 0 00.38-.08A1 1 0 0022 21V11a3 3 0 00-3-3zM8 11v1.89H6.11a1 1 0 00-.71.29L4 14.59V5a1 1 0 011-1h10a1 1 0 011 1v3h-5a3 3 0 00-3 3zm12 7.59l-1-1a1 1 0 00-.71-.3H11a1 1 0 01-1-1V11a1 1 0 011-1h8a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCommentsAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;