import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShieldExclamation = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12.92 15a.56.56 0 0 0-.09-.17l-.12-.15a1 1 0 0 0-1.42 0 .61.61 0 0 0-.12.15.56.56 0 0 0-.09.17.7.7 0 0 0-.06.19 1.23 1.23 0 0 0 0 .19.88.88 0 0 0 .08.39 1 1 0 0 0 1.3.54 1.19 1.19 0 0 0 .33-.22 1 1 0 0 0 .21-.32 1 1 0 0 0 .08-.39 1.23 1.23 0 0 0 0-.19.7.7 0 0 0-.1-.19ZM12 7.36a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Zm7.63-3.71a1 1 0 0 0-.84-.2 8 8 0 0 1-6.22-1.27 1 1 0 0 0-1.14 0 8 8 0 0 1-6.22 1.27 1 1 0 0 0-.84.2 1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39 10 10 0 0 0 6 1.39Z' />
  </svg>
);
export default SvgShieldExclamation;
