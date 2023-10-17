import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapMarkerInfo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm8.46-.32A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83Zm-3.86 5.37-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.49 6.49 0 0 1-1.87 5.24Zm-3.68-7.48a.56.56 0 0 0-.09-.17l-.12-.15A1 1 0 0 0 11.8 7h-.18l-.18.09-.15.13-.12.15a.56.56 0 0 0-.09.17.6.6 0 0 0-.06.19A1.23 1.23 0 0 0 11 8a.88.88 0 0 0 .08.39 1.11 1.11 0 0 0 .21.32 1.06 1.06 0 0 0 .33.22 1.07 1.07 0 0 0 .76 0 1.19 1.19 0 0 0 .33-.22 1.11 1.11 0 0 0 .21-.32A1 1 0 0 0 13 8a1.23 1.23 0 0 0 0-.19.6.6 0 0 0-.08-.24Z' />
  </svg>
);
export default SvgMapMarkerInfo;
