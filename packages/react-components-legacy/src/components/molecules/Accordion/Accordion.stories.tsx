import React from 'react';

import Accordion from './Accordion';

export default {
  title: 'Molecules/Accordion',
  component: Accordion
};

export const AccordionStory = args => {
  return (
    <Accordion>
      <Accordion.Summary>Click me</Accordion.Summary>
      <Accordion.Detail>My accordion detail</Accordion.Detail>
    </Accordion>
  );
};

AccordionStory.storyName = 'Accordion';

AccordionStory.parameters = {
  jest: ['Accordion.test.js']
};
