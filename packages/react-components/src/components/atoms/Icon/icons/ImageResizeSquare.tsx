import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageResizeSquare = ({
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
    <path d='M3 8.1a1 1 0 0 0 1-1v-.19a1 1 0 0 0-2 0v.19a1 1 0 0 0 1 1Zm0-4a1 1 0 0 0 .42-.1 1 1 0 0 0-.32-2H3a1.09 1.09 0 0 0-1 1.1 1 1 0 0 0 1 .95Zm17.39-.19A1 1 0 0 0 22 3a1 1 0 0 0-1-1h-.1a1 1 0 0 0-.51 1.86Zm-8.5.09h.22a1 1 0 0 0 0-2h-.22a1 1 0 0 0 0 2Zm-4.5 0h.21a1 1 0 0 0 0-2h-.21a1 1 0 0 0 0 2ZM21 20a1 1 0 0 0-.42.1 1 1 0 0 0 .32 1.9h.1a1.09 1.09 0 0 0 1-1.1 1 1 0 0 0-1-.9Zm-7-9a1 1 0 0 0-1-1H3.27A1.08 1.08 0 0 0 3 10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10.1a1 1 0 0 0 .9-1.42Zm-2 9H5.52l3.91-3.9a.33.33 0 0 1 .47 0l2.1 2.09Zm0-4.63-.68-.69a2.35 2.35 0 0 0-3.31 0l-4 4V12h8Zm9 0a1 1 0 0 0-1 1v.21a1 1 0 0 0 2 0v-.18a1 1 0 0 0-1-1Zm0-9a1 1 0 0 0-1 1v.23a1 1 0 1 0 2 0v-.21a1 1 0 0 0-1-1Zm0 4.5a1 1 0 0 0-1 1v.22a1 1 0 0 0 2 0v-.22a1 1 0 0 0-1-.98ZM17.1 20h-.2a1 1 0 1 0 0 2h.2a1 1 0 0 0 0-2Zm-.49-16a1 1 0 0 0 0-2h-.21a1 1 0 1 0 0 2Z' />
  </svg>
);
export default SvgImageResizeSquare;
