import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShutter(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.07 4.93A10 10 0 104.93 19.07 10 10 0 1019.07 4.93zM18.23 7h-5.47l2.35-2.35A8.14 8.14 0 0118.23 7zM9 4.6a8.15 8.15 0 013.87-.54L9 7.93zM7 5.77v5.47L5.19 9.43l-.54-.54A8.14 8.14 0 017 5.77zM4.6 15a8.12 8.12 0 01-.54-3.87L7.93 15zm1.17 2h5.47l-2.35 2.35A8.14 8.14 0 015.77 17zM15 19.4a8.13 8.13 0 01-3.87.54L15 16.07zm0-6.16L13.24 15h-2.49L9 13.24v-2.48L10.76 9h2.48L15 10.76zm2 5v-5.48l2.35 2.35A8.14 8.14 0 0117 18.23zM16.07 9h3.33a8.13 8.13 0 01.54 3.87z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShutter);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;