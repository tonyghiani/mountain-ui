import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBitcoin(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.136 12.117l-.596 2.415c.736.185 3.004.921 3.34-.441.35-1.421-2.009-1.789-2.744-1.974zm.813-3.297l-.54 2.191c.612.154 2.5.784 2.806-.455.318-1.293-1.654-1.581-2.266-1.736zM12 2a10 10 0 1010 10A10 10 0 0012 2zm4.358 8.575a1.743 1.743 0 01-1.385 1.611 1.933 1.933 0 01.997 2.661c-.586 1.692-1.977 1.835-3.827 1.481l-.449 1.82-1.085-.274.443-1.795c-.28-.07-.568-.145-.864-.227l-.445 1.804-1.084-.273.45-1.824c-.254-.065-.511-.135-.774-.201l-1.412-.356.539-1.256s.8.215.788.199a.394.394 0 00.498-.26l1.217-4.939a.583.583 0 00-.505-.638c.016-.011-.789-.198-.789-.198l.29-1.172 1.495.378-.001.006c.225.056.457.11.693.164l.444-1.802 1.085.274-.436 1.766c.291.068.584.135.87.207l.432-1.755 1.085.274-.445 1.802c1.37.477 2.372 1.193 2.175 2.523z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBitcoin);
export default ForwardRef;
