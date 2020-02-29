import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>

);

export default App;
