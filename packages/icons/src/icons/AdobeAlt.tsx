import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAdobeAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.247 2.403a.999.999 0 00-.83-.444H1.992a1 1 0 00-1 1v18.082a1 1 0 001.925.38L10.342 3.34a1 1 0 00-.095-.936zm-7.255 13.57V3.96h4.933zm19-14.014h-7.518a1 1 0 00-.921 1.388l7.517 17.85a.999.999 0 00.921.612 1.049 1.049 0 00.198-.02 1.001 1.001 0 00.803-.98V2.959a1 1 0 00-1-1zm-1 13.899L15.98 3.959h5.012zM12.949 9.52a1 1 0 00-.926-.646h-.01a1 1 0 00-.928.627l-3.059 7.631a1 1 0 00.929 1.372h2.254l1.522 2.99a.999.999 0 00.892.547h2.612a1 1 0 00.936-1.353zm1.287 10.521l-1.523-2.99a.999.999 0 00-.89-.547h-1.39l1.553-3.875 2.802 7.412z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAdobeAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;