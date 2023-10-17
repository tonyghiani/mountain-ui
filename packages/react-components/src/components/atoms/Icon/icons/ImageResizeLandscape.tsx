import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageResizeLandscape = ({
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
    <path d='M13 11H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-5.56 9 1.93-1.93a.3.3 0 0 1 .5 0L11.79 20ZM12 17.38l-.72-.71a2.41 2.41 0 0 0-3.33 0L4.61 20H3v-7h9ZM2 4.11a1 1 0 0 0 .86-.49A1.05 1.05 0 0 0 3.05 3 1 1 0 0 0 2 2a1 1 0 0 0-1 1v.1a1 1 0 0 0 1 1.01ZM9.91 4h.19a1 1 0 0 0 0-2h-.19a1 1 0 0 0 0 2ZM2 8.78a1 1 0 0 0 1-1v-.22a1 1 0 1 0-2 0v.22a1 1 0 0 0 1 1ZM14.09 2h-.19a1 1 0 0 0 0 2h.19a1 1 0 0 0 0-2ZM5.91 4h.19a1 1 0 0 0 0-2h-.19a1 1 0 0 0 0 2ZM22 6.4a1 1 0 0 0-1 1v.21a1 1 0 0 0 2 0V7.4a1 1 0 0 0-1-1ZM17.12 20h-.24a1 1 0 1 0 0 2h.24a1 1 0 0 0 0-2ZM21.9 2a1 1 0 0 0-.9 1 1 1 0 0 0 .1.42 1 1 0 0 0 1.9-.31V3a1.09 1.09 0 0 0-1.1-1Zm.1 8.9a1 1 0 0 0-1 1v.22a1 1 0 0 0 2 0v-.22a1 1 0 0 0-1-1ZM18.09 2h-.19a1 1 0 0 0 0 2h.19a1 1 0 0 0 0-2ZM22 20a.93.93 0 0 0-.44.11A1 1 0 0 0 21 21a1 1 0 0 0 1 1 1.09 1.09 0 0 0 1-1.1 1 1 0 0 0-1-.9Zm0-4.56a1 1 0 0 0-1 1v.22a1 1 0 1 0 2 0v-.26a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgImageResizeLandscape;
