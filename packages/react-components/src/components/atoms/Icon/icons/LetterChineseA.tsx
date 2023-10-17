import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLetterChineseA = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M20 5h-7V4a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h11.882a14.493 14.493 0 0 1-3.94 7.952A14.426 14.426 0 0 1 8.663 9.67a1 1 0 0 0-1.889.66 16.414 16.414 0 0 0 3.68 5.958 14.299 14.299 0 0 1-5.768 2.735A1 1 0 0 0 4.899 21a1.018 1.018 0 0 0 .215-.023 16.297 16.297 0 0 0 6.831-3.319 16.387 16.387 0 0 0 6.842 3.319 1 1 0 0 0 .426-1.954 14.382 14.382 0 0 1-5.79-2.733A16.48 16.48 0 0 0 17.893 7H20a1 1 0 0 0 0-2Z' />
  </svg>
);
export default SvgLetterChineseA;
