import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLetterChineseA(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 5h-7V4a1 1 0 00-2 0v1H4a1 1 0 000 2h11.882a14.493 14.493 0 01-3.94 7.952A14.426 14.426 0 018.663 9.67a1 1 0 00-1.889.66 16.414 16.414 0 003.68 5.958 14.299 14.299 0 01-5.768 2.735A1 1 0 004.899 21a1.018 1.018 0 00.215-.023 16.297 16.297 0 006.831-3.319 16.387 16.387 0 006.842 3.319 1 1 0 00.426-1.954 14.382 14.382 0 01-5.79-2.733A16.48 16.48 0 0017.893 7H20a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLetterChineseA);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;