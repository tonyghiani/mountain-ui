import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgShutterAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 11a1 1 0 010-.16c0-.28-.08-.56-.13-.84A9.54 9.54 0 0021 7.62a10 10 0 00-7-5.41l-.84-.13H12.63L12 2h-1.16l-.84.2A10 10 0 002.21 10c-.05.28-.09.56-.13.84a1 1 0 010 .16v2a1 1 0 010 .16c0 .28.08.56.13.84A9.54 9.54 0 003 16.38a10 10 0 007 5.41l.84.13.16.08h1.01c.34 0 .68 0 1-.05h.16l.83-.15a10 10 0 007.79-7.8c.05-.28.09-.56.13-.84A1 1 0 0122 13c0-.33.05-.67.05-1s-.05-.68-.05-1zm-8.84-6.9l.5.07A8 8 0 0118.24 7h-6.82zm-2.74.08l.4-.06L7.38 10 5.7 7.08a8 8 0 014.67-2.91zM4.59 15a8 8 0 01-.42-1.37c0-.22-.08-.45-.1-.68a.5.5 0 010-.12 8.22 8.22 0 010-1.62.5.5 0 010-.12c0-.23.06-.46.1-.68a7.76 7.76 0 01.38-1.31L8 15zm6.3 4.91l-.5-.07A8 8 0 015.76 17h6.82zM10.27 15l-1.73-3 1.73-3h3.46l1.73 3-1.73 3zm3.36 4.83l-.4.06L16.62 14l1.68 2.92a8 8 0 01-4.67 2.91zm6.33-7a.5.5 0 010 .12c0 .23-.06.46-.1.68a7.76 7.76 0 01-.38 1.27L16 9h3.37a8 8 0 01.42 1.37c0 .22.08.45.1.68a.5.5 0 010 .12 8.22 8.22 0 010 1.62z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShutterAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;