import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLetterEnglishA(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.97 19.757L15.35 5.272A2.996 2.996 0 0012.437 3h-.877a2.996 2.996 0 00-2.91 2.272L5.03 19.757a1 1 0 001.94.486L8.28 15h7.44l1.31 5.243a1 1 0 001.94-.486zM8.78 13l1.811-7.242a.998.998 0 01.97-.758h.878a.998.998 0 01.97.758L15.219 13z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLetterEnglishA);
export default ForwardRef;
