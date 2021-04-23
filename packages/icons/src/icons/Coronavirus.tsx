import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCoronavirus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.5 9a1.5 1.5 0 101.5 1.5A1.5 1.5 0 009.5 9zM9 14a1 1 0 101 1 1 1 0 00-1-1zm6-6a1 1 0 101 1 1 1 0 00-1-1zm-.5 4a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zm7.5-1h-1.059a8.952 8.952 0 00-1.916-4.61l.753-.754a1 1 0 00-1.414-1.414l-.753.753A8.952 8.952 0 0013 3.059V2a1 1 0 00-2 0v1.059a8.952 8.952 0 00-4.61 1.916l-.754-.753a1 1 0 00-1.414 1.414l.753.753A8.952 8.952 0 003.059 11H2a1 1 0 000 2h1.059a8.952 8.952 0 001.916 4.61l-.753.754a1 1 0 101.414 1.414l.753-.753A8.952 8.952 0 0011 20.941V22a1 1 0 002 0v-1.059a8.952 8.952 0 004.61-1.916l.754.753a1 1 0 001.414-1.414l-.753-.753A8.952 8.952 0 0020.941 13H22a1 1 0 000-2zm-4 2h.92A7.004 7.004 0 0113 18.92V17a1 1 0 00-2 0v1.92A7.004 7.004 0 015.08 13H6a1 1 0 000-2h-.92A7.004 7.004 0 0111 5.08V7a1 1 0 002 0V5.08A7.004 7.004 0 0118.92 11H18a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCoronavirus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;