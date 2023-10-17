import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileVibrate = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9.88 14.12 9.73 14l-.18-.1-.18-.05a1 1 0 0 0-.9.27.83.83 0 0 0-.22.33.94.94 0 0 0 0 .76 1.07 1.07 0 0 0 .54.54 1 1 0 0 0 .38.08 1.09 1.09 0 0 0 .39-.08.87.87 0 0 0 .32-.22 1 1 0 0 0 .22-.32 1 1 0 0 0 .07-.38.84.84 0 0 0-.08-.38.93.93 0 0 0-.21-.33ZM3.51 8.76a1 1 0 0 0 .71-.3l4.24-4.24a1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0L2.81 7.05a1 1 0 0 0 0 1.41 1 1 0 0 0 .7.3Zm17.68 6.78a1 1 0 0 0-1.41 0l-4.24 4.24a1 1 0 0 0 .7 1.71 1 1 0 0 0 .71-.3L21.19 17a1 1 0 0 0 0-1.46Zm.17-5.66a3 3 0 0 0-.87-2.12l-4.25-4.25a3.08 3.08 0 0 0-4.24 0L3.51 12a3 3 0 0 0 0 4.24l4.25 4.25a3 3 0 0 0 4.24 0L20.49 12a3 3 0 0 0 .87-2.12Zm-2.29.71-8.48 8.48a1 1 0 0 1-1.42 0l-4.24-4.24a1 1 0 0 1 0-1.42l8.48-8.48a1 1 0 0 1 1.42 0l4.24 4.24a1 1 0 0 1 0 1.42Z' />
  </svg>
);
export default SvgMobileVibrate;
