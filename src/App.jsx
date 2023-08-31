import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyles from './GlobalStyle';

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

function App() {
  return (
    <ErrorBoundary>
      <Wrapper
        className="App"
        data-testid="app"
      >
        <Header />
        <GlobalStyles />
      </Wrapper>
    </ErrorBoundary>
  );
}

export default App;
