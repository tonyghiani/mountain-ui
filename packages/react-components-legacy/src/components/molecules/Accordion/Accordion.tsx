import React, { useContext, useRef } from 'react';
import { useToggle } from '@mountain-ui/react-hooks';
import styled from 'styled-components';

import { Box, BoxProps } from '../../atoms';

export type AccordionProps = BoxProps & {
  /* Controlled value for the accordion expansion */
  children: React.ReactNode;
  /* Controlled value for the accordion expansion */
  expanded?: boolean;
  /* Controlled handler for the accordion expansion */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /* Uncontrolled default value for the accordion expansion */
  defaultExpanded?: boolean;
  /* Max height the accordion can expand to */
  maxHeight?: number;
};

type AccordionContextInterface = Omit<AccordionProps, 'children' | 'defaulExpanded'>;

type CompoundProps = Omit<AccordionProps, 'expanded' | 'defaulExpanded' | 'onClick' | 'maxHeight'>;

const StyledDetail = styled(Box)`
  will-change: height;
  transition: height 0.3s;
`;

const AccordionContext = React.createContext<AccordionContextInterface | null>(null);

/**
 * The `Accordion component allows to collapse/expand part of a DOM element`
 */
function Accordion({
  expanded,
  defaultExpanded = false,
  onClick,
  maxHeight = null,
  ...props
}: AccordionProps) {
  const [isExpanded, toggleExpanded] = useToggle(defaultExpanded);

  const context = {
    maxHeight,
    expanded: expanded ?? isExpanded,
    onClick: onClick ?? toggleExpanded
  };

  return (
    <AccordionContext.Provider value={context}>
      <Box overflow='hidden' {...props} />
    </AccordionContext.Provider>
  );
}

Accordion.Summary = function AccordionSummary(props: CompoundProps) {
  const { onClick } = useContext(AccordionContext);

  return <Box onClick={onClick} cursor='pointer' {...props} />;
};

Accordion.Detail = function AccordionDetail(props: CompoundProps) {
  const { expanded, maxHeight } = useContext(AccordionContext);

  const ref = useRef(null);

  const maxCollapsedHeight = Math.min(maxHeight || Infinity, ref.current?.scrollHeight) || 'auto';

  return (
    <StyledDetail
      ref={ref}
      height={expanded ? maxCollapsedHeight : 0}
      overflow={expanded && maxHeight ? 'auto' : 'hidden'}
      {...props}
    />
  );
};

Accordion.displayName = 'Accordion';

export default Accordion;
