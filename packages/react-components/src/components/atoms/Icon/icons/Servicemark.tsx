import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgServicemark = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M5.5 9h4a1 1 0 0 0 0-2h-4a3 3 0 0 0 0 6h2a1 1 0 0 1 0 2h-4a1 1 0 0 0 0 2h4a3 3 0 0 0 0-6h-2a1 1 0 0 1 0-2Zm15.92-1.38a1 1 0 0 0-.54-.54 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21L17 10.09l-2.79-2.8a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.54.54 1 1 0 0 0-.08.38v8a1 1 0 0 0 2 0v-5.59l1.79 1.8a1 1 0 0 0 1.42 0l1.79-1.8V16a1 1 0 0 0 2 0V8a1 1 0 0 0-.08-.38Z' />
  </svg>
);
export default SvgServicemark;
