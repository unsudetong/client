import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/pages/templates/Header';
import Modal from './components/organisms/LoginModal';
import LoginButtonGroup from './components/molecules/LoginModal/LoginButtonGroup';
import Main from './components/pages/Main';
import Store from './components/unreuse/Store';
import Footer from './components/pages/templates/Footer';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    visible?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onclick?: () => any;
    radius?: boolean;
    width?: string;
    background?: string;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoginContext = React.createContext<any | null>(null);

export const App = (): JSX.Element => {
  const [loginState, setLoginState] = useState(false);

  return (
    <div className="App" id="App">
      <Store>
        <Router>
          <LoginContext.Provider
            value={{
              visible: loginState,
              state: loginState,
              onclick: setLoginState,
            }}
          >
            <Modal visible={loginState}>
              <LoginButtonGroup />
            </Modal>
            <Header />
            <Main />
            <Footer />
          </LoginContext.Provider>
        </Router>
      </Store>
    </div>
  );
};
