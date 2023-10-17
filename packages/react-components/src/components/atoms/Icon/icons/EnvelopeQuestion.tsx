import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeQuestion = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-name=''
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M16.77 5.37A1 1 0 0 0 18.13 5a1 1 0 0 1 .87-.5 1 1 0 0 1 0 2 1 1 0 0 0 0 2A3 3 0 1 0 16.4 4a1 1 0 0 0 .37 1.37ZM21 13.5a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.91l5.88 5.89a3 3 0 0 0 4.24 0l1.64-1.64a1 1 0 1 0-1.42-1.42l-1.64 1.64a1 1 0 0 1-1.4 0L5.41 7.5H13a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Zm-2.71-3.71a1 1 0 0 0 0 1.42l.15.12a.76.76 0 0 0 .18.09.64.64 0 0 0 .18.06h.2a1 1 0 0 0 .71-1.71 1 1 0 0 0-1.42.02Z' />
  </svg>
);
export default SvgEnvelopeQuestion;
