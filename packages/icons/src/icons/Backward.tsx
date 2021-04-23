import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBackward(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.67 5.85a2.63 2.63 0 00-2.67 0l-4 2.3a2.67 2.67 0 00-4-2.31L3.33 9.69a2.67 2.67 0 000 4.62L10 18.16a2.66 2.66 0 002.67 0A2.65 2.65 0 0014 15.85l4 2.31a2.69 2.69 0 001.33.36 2.61 2.61 0 001.34-.37 2.63 2.63 0 001.33-2.3v-7.7a2.63 2.63 0 00-1.33-2.3zm-8.67 10a.66.66 0 01-.33.58.69.69 0 01-.67 0l-6.67-3.85a.67.67 0 010-1.16L11 7.57a.67.67 0 01.67 0 .66.66 0 01.33.58zm8 0a.67.67 0 01-1 .57l-5-2.88v-3.08l5-2.88a.67.67 0 011 .57z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBackward);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;