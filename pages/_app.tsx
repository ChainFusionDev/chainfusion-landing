import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/responsive.css';
import '../styles/fontawesome.css';
import 'animate.css';

import { AppProps } from 'next/app';
import Script from 'next/script';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Script src="/js/bootstrap.bundle.min.js" />
      <Script src="/js/jquery.easing.min.js" />
      <Script src="/js/validator.min.js" />
      <Script src="/js/custom.js" />
      <Component {...pageProps} />
    </>
  );
}

export default App;
