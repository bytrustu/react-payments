import { CardAddPage, CardCompletePage, CardListPage, CardProvider, CardPageIndex } from '@/card';
import { AppDisplay, Box, Button, Funnel, OverlayProvider, useModal } from '@/shared';

const App = () => {
  const showModal = useModal();
  const openCardApp = () => {
    showModal(
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
      </AppDisplay.Root>,
      { closeOverlayClick: true },
    );
  };
  return (
    <Box width="100%" height="100vh">
      <Button onClick={openCardApp}>열기</Button>
    </Box>
  );
};
export default App;
