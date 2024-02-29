import { Global, css } from '@emotion/react';
import { styleToken } from '@/shared/styles';

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: ${styleToken.color.gray200};
        margin: 0 auto;
      }
    `}
  />
);
