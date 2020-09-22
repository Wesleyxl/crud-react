import React from 'react';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
    return (
      <div className="App">
            <GlobalStyle />
            <Header/>
            <Routes />
      </div>
    );
}

export default App;
