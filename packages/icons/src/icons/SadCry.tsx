import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSadCry = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 2a10 10 0 0 0-3.41 19.39h.06a9.81 9.81 0 0 0 6.7 0h.06A10 10 0 0 0 12 2Zm2 17.74a7.82 7.82 0 0 1-4 0V16h4Zm2-.82V11a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2v3h-4v-3a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2v7.92a8 8 0 1 1 8 0Z' />
  </svg>
);
export default SvgSadCry;
