import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAndroid(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14.975 3.019l.96-1.732a.193.193 0 00-.338-.187l-.97 1.75a6.541 6.541 0 00-5.253 0l-.97-1.75a.193.193 0 00-.34.187l.96 1.732a5.546 5.546 0 00-3.092 4.876h12.137a5.546 5.546 0 00-3.094-4.876zM9.2 5.674a.507.507 0 11.507-.506.507.507 0 01-.507.506zm5.602 0a.507.507 0 11.507-.506.507.507 0 01-.507.506zM5.93 17.171A1.467 1.467 0 007.4 18.64h.973v3a1.36 1.36 0 102.721 0v-3h1.814v3a1.36 1.36 0 102.72 0v-3h.974a1.467 1.467 0 001.468-1.468V8.375H5.93zm-1.867-9.03a1.362 1.362 0 00-1.36 1.361v5.669a1.36 1.36 0 102.72 0V9.502a1.362 1.362 0 00-1.36-1.36zm15.872 0a1.362 1.362 0 00-1.36 1.361v5.669a1.36 1.36 0 102.72 0V9.502a1.362 1.362 0 00-1.36-1.36z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAndroid);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;