import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlaneDeparture = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    data-name=''
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M22 5.08a3.08 3.08 0 0 0-5.26-2.18l-2.81 2.81-6.49-2.16a1 1 0 0 0-1 .24L4.06 6.15a1 1 0 0 0 .29 1.61l5.18 2.35-2.6 2.6-1.71-.86a1 1 0 0 0-1.16.15l-1.77 1.81a1 1 0 0 0 0 1.41l6.49 6.49a1 1 0 0 0 1.41 0L12 19.94a1 1 0 0 0 .19-1.16l-.86-1.71 2.6-2.6 2.35 5.18a1 1 0 0 0 1.61.29l2.36-2.36a1 1 0 0 0 .24-1l-2.16-6.49 2.77-2.83a3.05 3.05 0 0 0 .9-2.18Zm-2.32.77-3.24 3.24a1 1 0 0 0-.24 1l2.16 6.48-.9.9-2.35-5.17a1 1 0 0 0-.73-.57 1 1 0 0 0-.89.28l-4.12 4.16a1 1 0 0 0-.19 1.15L10 19l-.56.56-5.03-5.04L5 14l1.71.86a1 1 0 0 0 1.15-.19L12 10.51a1 1 0 0 0-.29-1.62L6.5 6.54l.9-.9 6.48 2.16a1 1 0 0 0 1-.24l3.24-3.24a1.07 1.07 0 0 1 1.53 0 1 1 0 0 1 .32.76 1.06 1.06 0 0 1-.29.77Z' />
  </svg>
);
export default SvgPlaneDeparture;
