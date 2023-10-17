import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBaseballBall = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M13.922 6.44a1 1 0 0 0-1.703 1.05q.265.428.565.843a1 1 0 0 0 1.62-1.174q-.257-.353-.482-.719Zm-2.73 9.222a1 1 0 1 0-1.609 1.188c.17.23.327.466.476.709a1 1 0 1 0 1.705-1.047c-.178-.29-.368-.574-.572-.85Zm-3.707-3.429a1 1 0 0 0-1.045 1.705q.364.223.713.479A1 1 0 1 0 8.331 12.8q-.414-.302-.846-.567Zm10.06-2.167q-.364-.224-.715-.48a1 1 0 0 0-1.178 1.618q.415.302.847.567a1 1 0 1 0 1.047-1.705Zm1.447-5.065a9.9 9.9 0 1 0 0 14.001 9.913 9.913 0 0 0 0-14.001ZM17.72 17.729a8.03 8.03 0 0 1-4.516 2.273.97.97 0 0 0-1.746.074 8.062 8.062 0 0 1-7.535-7.532.975.975 0 0 0 .073-1.747 8.04 8.04 0 0 1 6.784-6.792.997.997 0 0 0 .857.498 1.028 1.028 0 0 0 .23-.026.982.982 0 0 0 .658-.546 8.054 8.054 0 0 1 7.538 7.538.972.972 0 0 0-.074 1.741 8.046 8.046 0 0 1-2.27 4.519Z' />
  </svg>
);
export default SvgBaseballBall;
