import { CardProvider } from 'src/card/providers';
import { Meta, StoryObj } from '@storybook/react';
import { Funnel } from './Funnel';
import { CardCompletePage, CardAddPage, CardListPage, CardPageIndex } from '@/card';
import { AppDisplay, OverlayProvider } from '@/shared';

const meta: Meta<typeof Funnel> = {
  title: 'Components/Funnel',
  component: Funnel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <CardProvider>
        <OverlayProvider>
          <Story />
        </OverlayProvider>
      </CardProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Funnel>;

export const Primary: Story = {
  render: () => (
    <AppDisplay.Root>
      <OverlayProvider>
        <CardProvider>
          <Funnel.Root>
            <Funnel.Step index={CardPageIndex.CardListPage}>
              <CardListPage />
            </Funnel.Step>
            <Funnel.Step index={CardPageIndex.CardAddPage}>
              <CardAddPage />
            </Funnel.Step>
            <Funnel.Step index={CardPageIndex.CardCompletePage}>
              <CardCompletePage />
            </Funnel.Step>
          </Funnel.Root>
        </CardProvider>
      </OverlayProvider>
    </AppDisplay.Root>
  ),
};

export const WithStartIndex: Story = {
  render: () => (
    <Funnel.Root startIndex={0}>
      <Funnel.Step index={0}>
        <CardListPage />
      </Funnel.Step>
      <Funnel.Step index={1}>
        <CardAddPage />
      </Funnel.Step>
      <Funnel.Step index={2}>
        <CardCompletePage />
      </Funnel.Step>
    </Funnel.Root>
  ),
};
