import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCompass(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V19a1 1 0 00-2 0v.93A8 8 0 014.07 13H5a1 1 0 000-2h-.93A8 8 0 0111 4.07V5a1 1 0 002 0v-.93A8 8 0 0119.93 11H19a1 1 0 000 2h.93A8 8 0 0113 19.93zm2.14-12.38l-5 2.12a1 1 0 00-.52.52l-2.12 5a1 1 0 00.21 1.1 1 1 0 00.7.3.93.93 0 00.4-.09l5-2.12a1 1 0 00.52-.52l2.12-5a1 1 0 00-1.31-1.31zm-2.49 5.1l-2.28 1 1-2.28 2.28-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCompass);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;