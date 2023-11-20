import React, { useContext, useRef } from 'react';
import mnt from 'react-mnt';
import { useToggle } from '@mountain-ui/react-hooks';

export interface MntAccordionProps extends StyledAccordionSummaryClick {
  /**
   * Controlled value for the accordion expansion
   */
  expanded?: boolean;
  /**
   * Uncontrolled default value for the accordion expansion
   */
  defaultExpanded?: boolean;
  /**
   * Max height the accordion can expand to
   */
  maxHeight?: number;
}

const StyledAccordion = mnt('div')<MntAccordionProps>`
  overflow-hidden
`;

const StyledAccordionSummary = mnt('div')`
  cursor-pointer
`;
type StyledAccordionSummaryClick = Pick<
  React.ComponentProps<typeof StyledAccordionSummary>,
  'onClick' | 'children'
>;

const StyledAccordionDetail = mnt('div')<{ shouldOverflow: boolean }>`
  will-change-[height] transition-height ease duration-150
  ${({ shouldOverflow }) => (shouldOverflow ? 'overflow-auto' : 'overflow-hidden')}
`;

export type MntAccordionSummaryProps = React.ComponentProps<typeof StyledAccordionSummary>;
export type MntAccordionDetailProps = Omit<
  React.ComponentProps<typeof StyledAccordionDetail>,
  'shouldOverflow'
>;

type MntAccordionContext = StyledAccordionSummaryClick &
  Pick<MntAccordionProps, 'expanded' | 'maxHeight'>;

const AccordionContext = React.createContext<MntAccordionContext | null>(null);

/**
 * Accordion component for displaying collapsible sections, optimizing space and organizing content hierarchically.
 * Improves UI efficiency and readability, allowing users to toggle and view information selectively.
 */
export const MntAccordion = ({
  expanded,
  defaultExpanded = false,
  onClick,
  maxHeight = null,
  ...props
}: MntAccordionProps) => {
  const [isExpanded, toggleExpanded] = useToggle(defaultExpanded);

  const context = {
    maxHeight,
    expanded: expanded ?? isExpanded,
    onClick: (onClick ?? toggleExpanded) as StyledAccordionSummaryClick['onClick']
  };

  return (
    <AccordionContext.Provider value={context}>
      <StyledAccordion {...props} />
    </AccordionContext.Provider>
  );
};

MntAccordion.Summary = function AccordionSummary(props: MntAccordionSummaryProps) {
  const { onClick } = useContext(AccordionContext);

  return <StyledAccordionSummary onClick={onClick} {...props} />;
};

MntAccordion.Detail = function AccordionDetail(props: MntAccordionDetailProps) {
  const { expanded, maxHeight } = useContext(AccordionContext);

  const ref = useRef(null);

  const maxCollapsedHeight = Math.min(maxHeight || Infinity, ref.current?.scrollHeight) || 'auto';
  const shouldOverflow = Boolean(expanded && maxHeight);

  return (
    <StyledAccordionDetail
      ref={ref}
      shouldOverflow={shouldOverflow}
      style={{ height: expanded ? maxCollapsedHeight : 0 }}
      {...props}
    />
  );
};

MntAccordion.displayName = 'MntAccordion';
