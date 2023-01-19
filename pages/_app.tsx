/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'redux/store';

import 'styles/scss/typography.scss';
import 'styles/scss/indents.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
