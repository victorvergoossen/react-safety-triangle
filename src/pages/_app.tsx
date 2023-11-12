import type { AppProps } from 'next/app';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <div className="max-w-lg min-h-screen mx-auto mt-12">
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  </>
);

export default App;
