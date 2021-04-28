import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFacebookMessengerAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.991 1a10.614 10.614 0 00-11 10.7 10.461 10.461 0 003.414 7.866l.052 1.69A1.8 1.8 0 006.256 23a1.82 1.82 0 00.726-.152L8.903 22a11.895 11.895 0 003.088.4 10.615 10.615 0 0011.001-10.7 10.615 10.615 0 00-11-10.7zm0 19.4a9.862 9.862 0 01-2.635-.35 1.799 1.799 0 00-1.196.092l-1.714.756-.045-1.493A1.81 1.81 0 005.8 18.13 8.488 8.488 0 012.99 11.7a8.66 8.66 0 019-8.7 8.705 8.705 0 110 17.4zm3.735-11.815l-2.313 2.755-3.347-2.056a.998.998 0 00-1.289.21L5.726 13.13a1 1 0 101.53 1.285l2.499-2.975 3.347 2.056a.998.998 0 001.289-.21l2.866-3.415a1 1 0 10-1.531-1.286z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFacebookMessengerAlt);
export default ForwardRef;
