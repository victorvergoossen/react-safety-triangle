import Head from 'next/head';
import SafetyTriangle from '../components/safety-triangle';
import { useState } from 'react';

const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Safety Triangle</title>
      </Head>

      <div className="px-4">
        <h1>Safety Triangle</h1>
        <p className="block mt-2 mb-5">Open the dropdown to show a visualisation of the safety triangle.</p>


        <div className="relative" onMouseLeave={() => setOpen(false)}>
          <button
            onMouseDown={() => setOpen(true)}
            className="relative px-4 font-sans text-lg text-black border-2 border-black rounded hover:bg-gray-100"
          >
            open dropdown
          </button>

          {open && (
            <SafetyTriangle
              showVisualisation
              className="mt-6 ml-12"
            >
              <li
                className="m-auto text-sm text-left text-black list-none shadow-lg cursor-pointer"
                style={{
                  visibility: open ? "visible" : "hidden",
                }}
              >
                <ul className="px-1 bg-gray-300 hover:bg-gray-100">Example 1</ul>
                <ul className="px-1 bg-gray-300 hover:bg-gray-100">Example 2</ul>
                <ul className="px-1 bg-gray-300 hover:bg-gray-100">Example 3</ul>
                <ul className="px-1 bg-gray-300 hover:bg-gray-100">Example 4</ul>
                <ul className="px-1 bg-gray-300 hover:bg-gray-100">Example 5</ul>
                <ul className="px-1 bg-gray-300 hover:bg-gray-100">Example 6</ul>
                <ul className="px-1 bg-gray-300 hover:bg-gray-100">Example 7</ul>
              </li>
            </SafetyTriangle>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
