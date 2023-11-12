import Head from 'next/head';
import { Example } from '../components/example';

const Index = () => {

  return (
    <>
      <Head>
        <title>Safety Triangle</title>
      </Head>

      <div className="px-4">
        <h1>Safety Triangle</h1>
        <p className="block mt-2 mb-5">Open the dropdown to show a visualisation of the safety triangle.</p>
        <Example />
      </div>
    </>
  );
};

export default Index;
