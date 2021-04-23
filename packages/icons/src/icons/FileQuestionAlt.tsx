import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileQuestionAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M13.07 12h-5a1 1 0 000 2h5a1 1 0 000-2zm1 8h-8a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v1a1 1 0 002 0V9a.14.14 0 000-.06.86.86 0 00-.07-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1 1 0 00-.29-.19h-.08a.88.88 0 00-.32-.11h-6a3 3 0 00-3 3v14a3 3 0 003 3h8a1 1 0 000-2zm-1-14.59L15.65 8h-1.58a1 1 0 01-1-1zm5.57 14.88a1.58 1.58 0 00-.15-.12 1.08 1.08 0 00-.36-.15 1 1 0 00-.9.27 1 1 0 000 1.42 1 1 0 00.7.29 1 1 0 00.93-1.38 1.19 1.19 0 00-.22-.33zM13.07 16h-5a1 1 0 000 2h5a1 1 0 000-2zm4.86-3a3 3 0 00-2.6 1.5 1 1 0 101.74 1 1 1 0 11.86 1.5 1 1 0 000 2 3 3 0 000-6zm-9.86-3h1a1 1 0 000-2h-1a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileQuestionAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;