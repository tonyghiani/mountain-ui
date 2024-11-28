import type { TestRunnerConfig } from '@storybook/test-runner';
import { checkA11y, injectAxe } from 'axe-playwright';

const a11yConfig: TestRunnerConfig = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    });
  },
  async postVisit(page) {
    // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler?.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  }
};

module.exports = a11yConfig;
