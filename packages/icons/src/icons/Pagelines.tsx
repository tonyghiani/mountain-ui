import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPagelines(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.885 13.993c1.75-.901 2.282-3.35 2.282-3.35s-2.305-.99-4.055-.085a4.206 4.206 0 00-1.698 1.822 8.965 8.965 0 00.06-.99 6.993 6.993 0 001.582-4.726C16.712 3.901 13.71 2 13.71 2s-2.442 2.583-2.095 5.35a6.819 6.819 0 002.518 4.03 9.322 9.322 0 01-.076 1.01 4.396 4.396 0 00-1.9-2.058c-1.774-.853-4.049.203-4.049.203s.603 2.432 2.376 3.284a4.72 4.72 0 003.258.076 9.433 9.433 0 01-1.458 2.9 4.393 4.393 0 00-2.012-1.98c-1.813-.763-4.028.404-4.028.404s.72 2.402 2.536 3.162a3.744 3.744 0 001.735.243 9.419 9.419 0 01-5.845 2.032.672.672 0 000 1.344 10.786 10.786 0 007.968-3.527 4.954 4.954 0 003.336 1.194c1.96-.207 3.34-2.299 3.34-2.299s-1.792-1.753-3.75-1.543a3.54 3.54 0 00-1.36.456 10.744 10.744 0 00.895-2.275 5.153 5.153 0 003.786-.013z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPagelines);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;