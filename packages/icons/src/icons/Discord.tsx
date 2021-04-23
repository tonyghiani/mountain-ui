import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDiscord(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.138 10.63zm3.755 0a1.146 1.146 0 101.049 1.141 1.096 1.096 0 00-1.05-1.141zM18.89 2H5.11A2.114 2.114 0 003 4.12v13.906a2.114 2.114 0 002.109 2.12h11.664l-.546-1.904 1.317 1.224 1.245 1.152L21 22.572V4.119A2.114 2.114 0 0018.891 2zm-3.97 13.433s-.37-.442-.679-.833a3.246 3.246 0 001.862-1.224 5.878 5.878 0 01-1.183.607 6.77 6.77 0 01-1.491.442 7.206 7.206 0 01-2.664-.01 8.645 8.645 0 01-1.512-.442 6.037 6.037 0 01-.751-.35c-.031-.02-.062-.03-.093-.051a.142.142 0 01-.04-.031c-.186-.103-.289-.175-.289-.175a3.2 3.2 0 001.8 1.214c-.308.39-.689.853-.689.853a3.729 3.729 0 01-3.137-1.563 13.775 13.775 0 011.481-5.997 5.086 5.086 0 012.89-1.08l.103.124a6.938 6.938 0 00-2.705 1.347s.226-.123.607-.298a7.722 7.722 0 012.335-.648 1.005 1.005 0 01.175-.02 8.702 8.702 0 012.077-.021 8.384 8.384 0 013.096.987 6.846 6.846 0 00-2.56-1.306l.143-.165a5.086 5.086 0 012.89 1.08 13.774 13.774 0 011.482 5.997 3.76 3.76 0 01-3.148 1.563z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDiscord);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;