import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLetterEnglishA = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18.97 19.757 15.35 5.272A2.996 2.996 0 0 0 12.437 3h-.877a2.996 2.996 0 0 0-2.91 2.272L5.03 19.757a1 1 0 0 0 1.94.486L8.28 15h7.44l1.31 5.243a1 1 0 0 0 1.94-.486ZM8.78 13l1.811-7.242a.998.998 0 0 1 .97-.758h.878a.998.998 0 0 1 .97.758L15.219 13Z' />
  </svg>
);
export default SvgLetterEnglishA;
