import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudSunHail(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.21 20.29a1 1 0 00-1.09-.21.93.93 0 00-.33.21 1.15 1.15 0 00-.21.33.94.94 0 000 .76.9.9 0 00.54.54.94.94 0 00.76 0 1.15 1.15 0 00.33-.21A1 1 0 009.5 21a.84.84 0 00-.08-.38 1.15 1.15 0 00-.21-.33zm4-2a.93.93 0 00-.33-.21 1 1 0 00-1.09.21 1.15 1.15 0 00-.21.33 1 1 0 001.3 1.3 1.15 1.15 0 00.33-.21 1 1 0 00.21-1.09 1.15 1.15 0 00-.21-.33zm-4-2a1 1 0 00-1.09-.21 1 1 0 00-.33.21 1.15 1.15 0 00-.21.33 1 1 0 00.21 1.09 1.15 1.15 0 00.33.21.94.94 0 00.76 0 1.15 1.15 0 00.33-.21A1 1 0 009.5 17a.84.84 0 00-.08-.38 1.15 1.15 0 00-.21-.33zm2.91-2.21a1 1 0 00-.33.21 1.05 1.05 0 00-.29.71 1 1 0 00.29.71 1.15 1.15 0 00.33.21.84.84 0 00.38.08 1 1 0 001-1 1.05 1.05 0 00-.29-.71 1 1 0 00-1.09-.21zM21 7h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 3.8V3a1 1 0 00-2 0v.8a4.1 4.1 0 00-1.26.52l-.57-.56a1 1 0 00-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.85 5.85 0 0010.5 6a6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58 1.14 1.14 0 00.4.08 1 1 0 00.4-1.92A1.48 1.48 0 014 14.5 1.5 1.5 0 015.5 13a1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.32 2.32 0 01.94 4.23 1 1 0 001.1 1.68 4.34 4.34 0 001.9-3.62 4.19 4.19 0 00-.3-1.55l.13.12a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.56-.56A4.25 4.25 0 0020.2 9h.8a1 1 0 000-2zm-3.34 2.65a2.09 2.09 0 01-.6.42A4.17 4.17 0 0016 9.54a6.12 6.12 0 00-2.09-2.49 2.42 2.42 0 01.46-.7 2.43 2.43 0 013.3 0 2.37 2.37 0 010 3.3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudSunHail);
export default ForwardRef;
