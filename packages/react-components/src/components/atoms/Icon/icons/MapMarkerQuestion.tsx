import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapMarkerQuestion = ({
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
    <path d='m12.44 13.11-.17-.11a1 1 0 0 0-1.09.22.87.87 0 0 0-.22.32 1 1 0 0 0-.08.39 1 1 0 0 0 .08.38 1.07 1.07 0 0 0 .54.54 1 1 0 0 0 .38.08 1.09 1.09 0 0 0 .39-.08 1 1 0 0 0 .32-.22 1 1 0 0 0 0-1.41ZM11.88 6A2.75 2.75 0 0 0 9.5 7.32a1 1 0 1 0 1.73 1 .77.77 0 0 1 .65-.32.75.75 0 1 1 0 1.5 1 1 0 1 0 0 2 2.75 2.75 0 1 0 0-5.5Zm8.58 3.68A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83Zm-3.86 5.37-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.49 6.49 0 0 1-1.87 5.24Z' />
  </svg>
);
export default SvgMapMarkerQuestion;
