import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFolderSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 20.29l-1.6-1.6-16.4-16.4a1 1 0 00-1.42 1.42l1.4 1.39A3 3 0 003 7v11a3 3 0 003 3h12a3 3 0 001.29-.3l1 1a1 1 0 001.42 0 1 1 0 000-1.41zM6 19a1 1 0 01-1-1V7a1 1 0 01.12-.46L17.59 19zm4.62-13a1 1 0 01.89.67l.54 1.64A1 1 0 0013 9h5a1 1 0 011 1v4.34a1 1 0 102 0V10a3 3 0 00-3-3h-4.28l-.32-1a3 3 0 00-2.68-2 1 1 0 00-.1 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFolderSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;