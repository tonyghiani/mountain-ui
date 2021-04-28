import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFolderInfo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 13.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm7-8h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1zm-7.29-7.71a1 1 0 00-1.09-.21.93.93 0 00-.33.21 1.05 1.05 0 00-.29.71 1 1 0 00.29.7 1 1 0 001.42 0 1 1 0 00.29-.7 1 1 0 00-.08-.38.93.93 0 00-.21-.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFolderInfo);
export default ForwardRef;
