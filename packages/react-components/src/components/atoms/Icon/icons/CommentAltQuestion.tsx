import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommentAltQuestion = ({
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
    <path d='M6.29 10.3a1 1 0 0 0 1.09 1.63 1.19 1.19 0 0 0 .33-.22 1 1 0 0 0 .21-.32A.85.85 0 0 0 8 11a1 1 0 0 0-.29-.7 1 1 0 0 0-1.42 0ZM7 5a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 1 0-2.6-4.5 1 1 0 0 0 .37 1.37 1 1 0 0 0 1.36-.37A1 1 0 0 1 7 5Zm12 1h-6a1 1 0 0 0 0 2h6a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H9a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73A1 1 0 0 0 21 22a1.1 1.1 0 0 0 .4-.08A1 1 0 0 0 22 21V9a3 3 0 0 0-3-3Z' />
  </svg>
);
export default SvgCommentAltQuestion;
