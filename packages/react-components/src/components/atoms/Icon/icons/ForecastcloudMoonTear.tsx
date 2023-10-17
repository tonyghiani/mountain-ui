import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgForecastcloudMoonTear = ({
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
    <path d='M21.7 7.57a1 1 0 0 0-.93-.26 3.2 3.2 0 0 1-.66.08 3 3 0 0 1-3-3 3 3 0 0 1 .08-.65A1 1 0 0 0 16 2.53a4.93 4.93 0 0 0-3.83 4.21 6.24 6.24 0 0 0-1.67-.24 6 6 0 0 0-5.94 5.13 3.5 3.5 0 0 0-.46 6.58 1.14 1.14 0 0 0 .4.08 1 1 0 0 0 .4-1.92A1.48 1.48 0 0 1 4 15a1.5 1.5 0 0 1 1.5-1.5 1 1 0 0 0 1-1 4 4 0 0 1 4-4 3.92 3.92 0 0 1 2.18.66 4 4 0 0 1 1.57 2 1 1 0 0 0 .78.67 2.32 2.32 0 0 1 .97 4.28 1 1 0 0 0 1.1 1.68 4.32 4.32 0 0 0 1.9-3.62 4.23 4.23 0 0 0-.49-2A4.94 4.94 0 0 0 22 8.5a1 1 0 0 0-.3-.93Zm-4.59 2.82a2.61 2.61 0 0 1-.42 0A4.6 4.6 0 0 0 16 10a6 6 0 0 0-1.82-2.28v-.37a3 3 0 0 1 1.05-2.28 5 5 0 0 0 4.23 4.23 3 3 0 0 1-2.35 1.09Zm-6 3.94a1 1 0 0 0-1.12 0C9.84 14.41 7.5 16 7.5 18.5a3 3 0 0 0 6 0c0-2.5-2.35-4.1-2.44-4.17Zm-.61 5.17a1 1 0 0 1-1-1 3 3 0 0 1 1-2 3 3 0 0 1 1 2 1 1 0 0 1-1 1Z' />
  </svg>
);
export default SvgForecastcloudMoonTear;
