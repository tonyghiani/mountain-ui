import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgYenCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 1a11 11 0 1011 11A11 11 0 0012 1zm0 20a9 9 0 119-9 9 9 0 01-9 9zm2.83-14.55L12 10.7 9.17 6.45a1 1 0 00-1.39-.28 1 1 0 00-.28 1.38l2.11 3.17H9a1 1 0 000 2h2l.05.08v.92H9a1 1 0 000 2h2V18a1 1 0 002 0v-2.28h2a1 1 0 000-2h-2v-.92l.05-.08H15a1 1 0 000-2h-.61l2.11-3.17a1 1 0 00-.28-1.38 1 1 0 00-1.39.28z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgYenCircle);
export default ForwardRef;
