import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDocker(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.8 8.8h1.8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H8.8c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.4 2.3H13c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm0-2.3H13c.1 0 .2-.1.2-.2V7.1l-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.5 2.3h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm-2.5-4.6H13c.1 0 .2-.1.2-.2V4.8c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.1.2.1zm-7.4 4.6h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H3.8c-.1 0-.2.1-.2.2v1.6l.2.2zm18-1c-.5-.3-1.1-.5-1.6-.4-.3 0-.6 0-.8.1-.2-.9-.7-1.7-1.4-2.1l-.3-.2-.2.3c-.3.2-.5.6-.6 1.1-.2.8-.1 1.6.3 2.2-.5.2-1 .3-1.5.4H2.6c-.3 0-.6.3-.6.6 0 1.2.2 2.3.6 3.4.4 1.1 1.1 2 2 2.6 1.4.7 2.9 1 4.4.9.8 0 1.6-.1 2.4-.2 1.1-.2 2.2-.6 3.2-1.2.8-.5 1.5-1.1 2.2-1.8.9-1.1 1.6-2.3 2.1-3.7h.2c.8 0 1.6-.3 2.2-.8.3-.2.5-.5.6-.9l.1-.2-.2-.1zm-15.5 1H8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H6.3c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm0-2.3H8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H6.3c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.5 2.3h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H8.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDocker);
export default ForwardRef;
