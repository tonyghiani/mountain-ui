import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSyringe = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.71 2.29a1 1 0 0 0-1.42 0l-2.12 2.12-.71-.7a1 1 0 0 0-1.41 0l-1.41 1.41-.71-.71a1 1 0 0 0-1.42 0l-7.77 7.78-.74-.7a1 1 0 0 0-1.38 1.41l3.53 3.54-1.73 1.74-.71-.72a1 1 0 0 0-1.42 1.42l2.83 2.83a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-.71-.7 1.74-1.74 3.53 3.53a1 1 0 0 0 .71.3 1 1 0 0 0 .7-1.71l-.7-.71 7.78-7.77a1 1 0 0 0 0-1.42l-.71-.71L20.29 8a1 1 0 0 0 0-1.41l-.7-.71 2.12-2.12a1 1 0 0 0 0-1.47ZM7.57 15l-1.42-1.39 1.41-1.42L9 13.61Zm2.82 2.83L9 16.44 10.39 15l1.42 1.42ZM13.22 15 9 10.78l4.24-4.24.71.7 3.53 3.54Zm4.24-7-1.41-1.46.71-.71.7.7.7.7Z' />
  </svg>
);
export default SvgSyringe;
