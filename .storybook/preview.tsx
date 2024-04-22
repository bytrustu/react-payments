import type { Preview, StoryFn } from '@storybook/react';
import { GlobalStyles } from '../src/shared/styles';
import { NearPaymentsProvider } from '../src/card';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story: StoryFn) => (
    <NearPaymentsProvider>
      <GlobalStyles />
      <Story />
    </NearPaymentsProvider>
  ),
];

export default preview;
