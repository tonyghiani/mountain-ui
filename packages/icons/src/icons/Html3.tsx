import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgHtml3(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3.195 2l1.602 17.994L11.99 22l7.212-2.013L20.805 2zm14.281 4.123l-.534 5.994.002.033-.002.074-.38 4.19-.041.373L12 18.037l-.004.004-4.512-1.258-.306-3.465H9.39l.157 1.762 2.453.665H12l2.461-.674.26-2.869H9.577l-.044-.485-.101-1.136-.052-.61h5.538l.202-2.232H6.682l-.044-.485-.1-1.137-.053-.61h11.044zm0 0' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHtml3);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;