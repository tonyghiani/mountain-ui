import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgForecastcloudMoonTear(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.7 7.57a1 1 0 00-.93-.26 3.2 3.2 0 01-.66.08 3 3 0 01-3-3 3 3 0 01.08-.65A1 1 0 0016 2.53a4.93 4.93 0 00-3.83 4.21 6.24 6.24 0 00-1.67-.24 6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58 1.14 1.14 0 00.4.08 1 1 0 00.4-1.92A1.48 1.48 0 014 15a1.5 1.5 0 011.5-1.5 1 1 0 001-1 4 4 0 014-4 3.92 3.92 0 012.18.66 4 4 0 011.57 2 1 1 0 00.78.67 2.32 2.32 0 01.97 4.28 1 1 0 001.1 1.68 4.32 4.32 0 001.9-3.62 4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 8.5a1 1 0 00-.3-.93zm-4.59 2.82a2.61 2.61 0 01-.42 0A4.6 4.6 0 0016 10a6 6 0 00-1.82-2.28v-.37a3 3 0 011.05-2.28 5 5 0 004.23 4.23 3 3 0 01-2.35 1.09zm-6 3.94a1 1 0 00-1.12 0C9.84 14.41 7.5 16 7.5 18.5a3 3 0 006 0c0-2.5-2.35-4.1-2.44-4.17zm-.61 5.17a1 1 0 01-1-1 3 3 0 011-2 3 3 0 011 2 1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgForecastcloudMoonTear);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;