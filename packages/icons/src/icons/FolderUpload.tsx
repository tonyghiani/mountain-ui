import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFolderUpload(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.71 10.79a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2 2a1 1 0 001.42 1.42l.29-.3v2.59a1 1 0 002 0v-2.59l.29.3a1 1 0 001.42 0 1 1 0 000-1.42zM19 5.5h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFolderUpload);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;