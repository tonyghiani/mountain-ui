import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudQuestion = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M18.42 8.22a7 7 0 0 0-13.36 1.89A4 4 0 0 0 6 18h2a1 1 0 0 0 0-2H6a2 2 0 0 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67A3 3 0 0 1 20 13a3 3 0 0 1-3 3 1 1 0 0 0 0 2 5 5 0 0 0 1.42-9.78Zm-5.5 10.4a.56.56 0 0 0-.09-.17l-.12-.16a1.15 1.15 0 0 0-.33-.21 1 1 0 0 0-1.09.21l-.12.16a.56.56 0 0 0-.09.17.64.64 0 0 0-.06.18 1.5 1.5 0 0 0 0 .2 1.23 1.23 0 0 0 0 .19.6.6 0 0 0 .06.19.56.56 0 0 0 .09.17l.12.16A1.05 1.05 0 0 0 12 20a1 1 0 0 0 .38-.08 1.15 1.15 0 0 0 .33-.21l.12-.16a.56.56 0 0 0 .09-.17.6.6 0 0 0 .06-.19A1.23 1.23 0 0 0 13 19a1.5 1.5 0 0 0 0-.2.64.64 0 0 0-.08-.18ZM12 11a3 3 0 0 0-2.6 1.5 1 1 0 0 0 .37 1.37 1 1 0 0 0 1.36-.37A1 1 0 0 1 12 13a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6Z' />
  </svg>
);
export default SvgCloudQuestion;
