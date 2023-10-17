import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJackhammer = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18.85 15.69a1 1 0 0 0-1.41 0l-2.06 2.06a1 1 0 0 0 .45 1.67l.26.07-.8.8a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 .26-1 1 1 0 0 0-.71-.71l-.26-.06.83-.84a1 1 0 0 0 .02-1.41Zm-10.94 3.8.26-.07a1 1 0 0 0 .45-1.67l-2.06-2.06a1 1 0 0 0-1.41 1.41l.83.84-.26.06a1 1 0 0 0-.71.71 1 1 0 0 0 .26 1l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM21 4a1 1 0 0 0-1 1h-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3H4a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0h3v2a3 3 0 0 0 2 2.83V13a2 2 0 0 0 2 2v6a1 1 0 0 0 2 0v-6a2 2 0 0 0 2-2v-1.17A3 3 0 0 0 17 9V7h3a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1Zm-6 5a1 1 0 0 1-1 1 1 1 0 0 0-1 1v2h-2v-2a1 1 0 0 0-1-1 1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm-3-3a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgJackhammer;
