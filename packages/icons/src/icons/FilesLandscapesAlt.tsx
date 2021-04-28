import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFilesLandscapesAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 19H6a3 3 0 01-3-3V8a1 1 0 00-2 0v8a5 5 0 005 5h12a1 1 0 000-2zm-4-8h-4a1 1 0 000 2h4a1 1 0 000-2zm9-1.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09a.88.88 0 00-.33-.11H8a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-4-.06zm-6-3.53L19.59 9H18a1 1 0 01-1-1zM21 14a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1h7v3a3 3 0 003 3h3zM10 9h2a1 1 0 000-2h-2a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFilesLandscapesAlt);
export default ForwardRef;
