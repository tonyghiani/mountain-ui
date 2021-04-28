import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgAppleAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.504 15.744a3.386 3.386 0 01-2.054-3.127 3.497 3.497 0 011.687-2.947 1 1 0 00.3-1.415 5.574 5.574 0 00-4.016-2.385 6.422 6.422 0 00.965-3.977.984.984 0 00-1.033-.892 6.69 6.69 0 00-4.444 2.261 6.842 6.842 0 00-1.48 2.9 5.264 5.264 0 00-1.62-.278 5.925 5.925 0 00-4.99 3.008C1.93 12.169 3.086 17.08 5.13 20.037c.82 1.184 2.051 2.962 3.908 2.962.037 0 .074 0 .11-.002a4.74 4.74 0 001.793-.463 3.274 3.274 0 011.446-.354 3.045 3.045 0 011.357.338 4.752 4.752 0 001.962.456c1.913-.036 3.043-1.687 3.868-2.893a12.042 12.042 0 001.513-3.108 1.003 1.003 0 00-.584-1.23zm-7.08-11.176a4.941 4.941 0 011.919-1.322 4.855 4.855 0 01-1.037 2.15 4.39 4.39 0 01-1.264 1.041l-.003.001-.085.034c-.186.073-.417.164-.595.223a4.825 4.825 0 011.064-2.127zm4.5 14.385c-.803 1.173-1.435 2.006-2.254 2.021a2.367 2.367 0 01-1.13-.292 4.97 4.97 0 00-2.152-.502 5.214 5.214 0 00-2.229.513 2.885 2.885 0 01-1.086.306h-.03c-.813 0-1.687-1.262-2.268-2.101-1.452-2.1-2.792-6.283-1.223-9.008a3.917 3.917 0 013.29-2.006h.034a4.758 4.758 0 011.642.444c.13.051.26.103.389.15.032.015.066.027.1.038a3.315 3.315 0 001.118.237 4.436 4.436 0 001.564-.42 4.956 4.956 0 012.222-.498 3.787 3.787 0 012.25.854 5.31 5.31 0 00-1.711 3.945v.001a5.3 5.3 0 002.45 4.503 10.198 10.198 0 01-.975 1.815z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAppleAlt);
export default ForwardRef;
