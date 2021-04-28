import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVkAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.744 13.53a5.519 5.519 0 00-.978-.837 7.873 7.873 0 002.859-4.471 1 1 0 10-1.95-.444 5.86 5.86 0 01-3.02 3.903V8.002a.958.958 0 00-.044-.216 1.024 1.024 0 00-.035-.171.991.991 0 00-.167-.25c-.018-.02-.027-.048-.046-.068a1.001 1.001 0 00-.246-.167c-.026-.014-.045-.037-.072-.048a1.02 1.02 0 00-.236-.049.945.945 0 00-.152-.031L11.003 7H11a.995.995 0 00-.35 1.929v4.89a11.307 11.307 0 01-3.01-5.984 1 1 0 10-1.972.334 13.334 13.334 0 005.4 8.644.986.986 0 00.128.064.94.94 0 00.108.054.994.994 0 00.35.071.983.983 0 00.424-.102c.01-.005.021-.002.031-.007a.993.993 0 00.24-.176c.015-.014.024-.03.038-.045a.988.988 0 00.16-.237.952.952 0 00.037-.087.988.988 0 00.07-.346v-2.126a3.551 3.551 0 011.616 1.005l1.647 1.797a1 1 0 101.474-1.352zM15.073 1H8.937C2.78 1 1 2.778 1 8.927v6.136C1 21.22 2.778 23 8.927 23h6.136C21.22 23 23 21.222 23 15.073V8.937C23 2.78 21.222 1 15.073 1zM21 15.073c0 5.04-.888 5.927-5.938 5.927H8.928C3.887 21 3 20.112 3 15.062V8.928C3 3.887 3.888 3 8.938 3h6.135C20.113 3 21 3.888 21 8.938z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVkAlt);
export default ForwardRef;
