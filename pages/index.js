import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import { Link } from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { FaFileArrowDown } from "react-icons/fa6";

// Dynamically import the ClientOnlyComponent with ssr: false
const Navbar = dynamic(() => import('./navbar'), {
  ssr: false, // Ensures this component is only rendered on the client-side
});

// Download Resume
const downloadResume = () => {
  const pdfUrl = "Resume-Nimish_Shah_2024.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Resume-Nimish_Shah_2024.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nimish Shah | Portfolio</title>
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>

      <header id="portfolio-header">
        <Navbar/>
      </header>

      <main>
        <div id="intro-section"> 
          <div id="intro-content">
            <div id="photo-div">
              <img id="profile-photo" title="Nimish Shah" src="nimish_photo.png" alt="nimish_photo.png"/>
            </div>
            <div id="intro-div">
              <h1>Nimish Shah</h1>
              <br/>
              <h4><i>Graphic Design Specialist</i></h4>
              <br/>
              <p>I specialize in a wide range of creative work, including graphic design, 3D modeling, and research & development in visual arts. My portfolio highlights projects that blend technical precision with artistic vision, spanning from branding and digital content to immersive 3D environments. Each piece showcases a dedication to innovation, pushing the boundaries of design and technology to create visually compelling and functional outcomes.</p>
              <br/>
              <Button id="resume-btn" title="Download Resume" color="primary" variant="bordered" onPress={downloadResume}>
                <FaFileArrowDown/>&nbsp;Resume
              </Button>
            </div>
          </div>
        </div>

        {/* <div id="about-section">

        </div>

        <div id="my-services-section">

        </div>

        <div id="portfolio-section">

        </div>

        <div id="contact-section">

        </div> */}

        <footer id="portfolio-footer">
          <p>&copy; 2025 Nimish Shah. All rights reserved.</p>
          <br/>
          <code>Made with ❤️ by 
            <a target="_blank" title="Paurav Shah | GitHub" href="https://github.com/paurav11">
              &nbsp;Paurav Shah
            </a>
          .</code>
        </footer>
      </main>

      <style jsx>{`
        #navbar-item {
          padding: 2rem !important;
        }
        main {
          width: 100%;
          height: auto;
        }
        #intro-section, #about-section, #my-services-section, #portfolio-section, #contact-section {
          margin: auto;
          width: 80vw;
          height: 100vh;
        }
        #intro-section {
          margin: 10% 15% 0 15%;
        }
        #intro-content {
          width: 66vw;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          verical-align: center;
        }
        #photo-div {
          text-align: right;
          padding: 0 3% 0 0;
          width: 50%;
        }
        #profile-photo {
          height: auto;
          margin-left: auto;
          margin-right: 0;
        }
        #intro-div {
          text-align: left;
          padding: 0 0 0 3%;
          width: 50%;
        }
        h1 {
          font-size: 2rem;
        }
        footer {
          padding: 15px 0;
          width: 100%;
          height: auto;
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

        @media only screen and (max-width: 950px) {
          #intro-section {
            margin: 20% 10% 0 10%;
          }
          #intro-content {
            width: 100vw;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            verical-align: center;
          }
          #photo-div {
            text-align: center;
            margin: auto;
            padding: 0 0 5% 0;
            width: 100vw;
          }
          #profile-photo {
            height: auto;
            margin-left: auto;
            margin-right: auto;
          }
          #intro-div {
            text-align: center;
            padding: 5% 0 0 0;
            width: 100vw;
          }
        }

        @media only screen and (max-width: 750px) {
          
        }

        @media only screen and (max-width: 600px) {
          
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