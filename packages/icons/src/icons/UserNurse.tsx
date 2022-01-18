import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgUserNurse(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16.174 12.916c-.018-.008-.035-.017-.053-.024-.138-.062-.274-.127-.415-.183a6 6 0 10-7.412 0c-.14.056-.277.121-.415.183l-.054.024a9.946 9.946 0 00-5.76 7.976 1 1 0 101.99.216A7.945 7.945 0 018.04 15.05l3.252 3.251a1 1 0 001.414 0l3.252-3.251a7.945 7.945 0 013.987 6.058 1 1 0 00.992.892 1.048 1.048 0 00.11-.006 1 1 0 00.886-1.102 9.946 9.946 0 00-5.76-7.976zM8.041 7.594a3.977 3.977 0 017.918 0zM12 16.18l-1.937-1.937a7.834 7.834 0 013.874 0zM12 12a4.003 4.003 0 01-3.664-2.406h7.328A4.003 4.003 0 0112 12z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUserNurse);
export default ForwardRef;
