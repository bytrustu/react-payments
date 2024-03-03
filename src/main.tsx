import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { CardProvider } from '@/components';
import { GlobalStyles } from '@/shared/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>,
);
