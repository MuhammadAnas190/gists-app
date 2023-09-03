import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './redux';
import GlobalStyles from './GlobalStyle';
import { ErrorBoundary, GistList, Header } from './components';

const App = () => (
  <Wrapper className="App" data-testid="app">
    <ErrorBoundary>
      <Provider store={store}>
        <Header />
        <GlobalStyles />
        <GistList />
      </Provider>
    </ErrorBoundary>
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
