import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Main from 'components/layout/Main';
import { AuthContextProvider } from 'contexts/AuthContext';
import RootRouts from './RootRoutes';


const history = createBrowserHistory();
function App() {
  return (
    <AuthContextProvider>
      <Router history={history}>
        <Header />
        <Main>
          <RootRouts />
        </Main>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
