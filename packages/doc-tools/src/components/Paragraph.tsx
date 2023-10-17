import React from "react";

import { Text, TextProps } from "./Text";

export interface ParagraphProps extends TextProps { };

export const Paragraph = (props: ParagraphProps) => {
  return <Text as="p" {...props} />
}

Paragraph.displayName = 'Paragraph';
