import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgKeyboardAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.71 9.29a1 1 0 00-1.42 0 1 1 0 00-.21.33 1 1 0 00.21 1.09 1.15 1.15 0 00.33.21A.84.84 0 006 11a1 1 0 00.92-1.38 1 1 0 00-.21-.33zM10 11a1 1 0 00.92-1.38 1 1 0 00-.21-.33 1 1 0 00-.9-.29.6.6 0 00-.19.06l-.18.09-.15.12A1.05 1.05 0 009 10a1 1 0 001 1zm-3.62 2.08a1 1 0 00-.76 0A1 1 0 005 14a1 1 0 001.38.92 1.15 1.15 0 00.33-.21A1 1 0 007 14a1 1 0 00-.29-.71.93.93 0 00-.33-.21zM14 13h-4a1 1 0 000 2h4a1 1 0 000-2zm.71-3.71a1 1 0 00-1.42 0 1 1 0 00-.21.33A1 1 0 1015 10a.84.84 0 00-.08-.38 1 1 0 00-.21-.33zm3.85 3.88a.76.76 0 00-.18-.09 1 1 0 00-.76 0 1.15 1.15 0 00-.33.21A1.05 1.05 0 0017 14a1 1 0 102 0 1.05 1.05 0 00-.29-.71zM20 5H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h16a1 1 0 011 1zm-2.29-6.71A1 1 0 0017 10a1 1 0 101.92-.38 1 1 0 00-.21-.33z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKeyboardAlt);
export default ForwardRef;
