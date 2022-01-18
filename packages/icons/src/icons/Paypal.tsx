import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgPaypal(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M20.437 7.104a3.823 3.823 0 00-.573-.523 4.725 4.725 0 00-1.157-3.74C17.623 1.619 15.775 1 13.214 1H7.001a1.892 1.892 0 00-1.864 1.592l-2.59 16.406a1.533 1.533 0 001.516 1.785h2.664l-.082.52A1.467 1.467 0 008.093 23h3.235a1.761 1.761 0 001.75-1.47l.641-4.031.011-.055h.299c4.032 0 6.55-1.993 7.285-5.762a5.149 5.149 0 00-.877-4.578zm-12.595 6.6l-.714 4.535-.086.544H4.606L7.097 3h6.117c1.936 0 3.318.404 3.993 1.164a2.967 2.967 0 01.607 2.733l-.018.113c-.012.076-.023.15-.044.246a5.846 5.846 0 01-2.005 3.67 6.677 6.677 0 01-4.217 1.183H9.707a1.88 1.88 0 00-1.865 1.595zm11.51-2.405c-.552 2.828-2.243 4.145-5.323 4.145h-.484a1.761 1.761 0 00-1.75 1.473l-.65 4.074L8.717 21l.478-3.034.612-3.853h1.719c.157 0 .295-.023.448-.029.359-.012.717-.026 1.053-.068.205-.025.393-.072.59-.108.273-.05.545-.1.801-.171.19-.053.368-.122.55-.186.238-.085.474-.174.697-.279.168-.079.328-.167.486-.257a6.771 6.771 0 00.613-.392c.142-.102.282-.208.415-.32a6.564 6.564 0 00.537-.52c.113-.12.228-.237.333-.367a7.09 7.09 0 00.48-.693c.076-.122.161-.235.232-.363a8.332 8.332 0 00.52-1.154c.009-.024.021-.044.03-.068.004-.01.01-.02.014-.032a4.299 4.299 0 01.026 2.193z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPaypal);
export default ForwardRef;
