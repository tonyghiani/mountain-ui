import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFolderQuestion(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.57 16.3a.64.64 0 00-.15-.13l-.17-.09-.19-.08a1 1 0 00-.9.28 1 1 0 00-.22.32 1 1 0 00-.07.39 1 1 0 00.29.7 1 1 0 00.32.22 1 1 0 00.39.07 1 1 0 00.38-.07 1 1 0 00.32-.22 1 1 0 00.3-.7 1 1 0 00-.08-.39.87.87 0 00-.22-.3zm-.7-7.3a3 3 0 00-2.6 1.5 1 1 0 101.73 1 1 1 0 011.87.5 1 1 0 01-1 1 1 1 0 100 2 3 3 0 000-6zM19 5.5h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFolderQuestion);
export default ForwardRef;
