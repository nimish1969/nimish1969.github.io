import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';


// Dynamically import the ClientOnlyComponent with ssr: false
const Navbar = dynamic(() => import('./navbar'), {
  ssr: false, // Ensures this component is only rendered on the client-side
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nimish Shah | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
      </main>

      <footer>
        <p>&copy; 2024 Nimish Shah. All rights reserved.</p>
        <br/>
        <code>Made with ❤️ by 
          <a
            href="https://github.com/paurav11"
            target="_blank"
            rel="noopener noreferrer"
          >
          &nbsp;Paurav Shah
          </a>.</code>
      </footer>

      <style jsx>{`
        main {
          width: 100%;
          height: 100vh;
          background-image: url('1.jpg'), url('2.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        footer {
          padding: 10px 0;
          width: 100%;
          height: auto;
          border-top: 2px solid blue;
          background-color: #202830;
          text-align: center;
        }
        code {
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 0.7rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}