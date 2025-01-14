import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {Button} from "@nextui-org/react";
import {FaFileArrowDown, FaEnvelope, FaGithub} from "react-icons/fa6";

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
    <div>
      <Head>
        <title>Nimish Shah | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>

      <header id="portfolio-header">
        <Navbar/>
      </header>

      <div id="content-wrapper">
        <main id="main">
          <section id="intro">
            <div id="intro-content">
              <div id="photo-div">
                <img id="profile-photo" title="Nimish Shah" src="nimish_photo.png" alt="nimish_photo.png"/>
              </div>
              <div id="intro-div">
                <p id="user-name" className="kumar-one-regular">Nimish Shah</p>
                <br/>
                <p><i><span id="user-role">Graphic Design Specialist</span></i></p>
                <br/>
                <q id="design-quote"><i>Design is always a balanced combination of graphics and text, it looks good when arranged perfectly.</i></q>
                <br/>
                <br/>
                <p>Hey there, welcome to my portfolio! I specialize in a wide range of creative work, including graphic design, 3D modeling, and with research &amp; development in visual arts.</p>
                <br/>
                <p>My portfolio highlights projects that blend technical precision with artistic vision, spanning from branding and digital content to immersive 3D environments. Each piece showcases a dedication to innovation, pushing the boundaries of design and technology to create visually compelling and functional outcomes.</p>
                <br/>
                <p>Kindly, go through my resume for more info and let me know if I'm the person that you might be looking for. Always looking forward to connect with creative minds.</p>
                <br/>
                <div id="intro-btns">
                  <Button id="resume-btn" className="bordered-btn" title="Download Resume" color="primary" variant="bordered" onPress={downloadResume}>
                    <FaFileArrowDown/>&nbsp;Resume
                  </Button>
                  <Button id="email-btn" className="bordered-btn" title="Email" color="primary" variant="bordered" as="a" target="_blank" href="mailto:shahnimish.1969@gmail.com">
                    <FaEnvelope/>&nbsp;Send Message
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section id="about">

          </section>

          <section id="services">

          </section>

          <section id="portfolio">

          </section>

          <section id="contact">

          </section>
        </main>

        <footer id="portfolio-footer">
          <p>&copy; 2025 Nimish Shah. All rights reserved.</p>
          <br/>
          <Button id="github-btn" className="bordered-btn" title="Nimish Shah | GitHub" color="primary" variant="bordered" as="a" target="_blank" href="https://github.com/nimish1969">
            <FaGithub/>&nbsp;nimish1969
          </Button>
          <br/>
          <br/>
          <code>Made with ❤️ by 
            <a target="_blank" title="Paurav Shah | GitHub" href="https://github.com/paurav11">
              &nbsp;Paurav Shah
            </a>
          .</code>
        </footer>
      </div>

      <style jsx>{`
        #navbar-item {
          padding: 2rem !important;
        }
        #content-wrapper {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
        }
        main {
          flex-grow: 1;
          width: 100%;
          height: auto;
        }
        #intro, #about, #services, #portfolio, #contact {
          overflow: hidden;
          margin: auto;
          width: 80vw;
          height: 100vh;
          z-index: 1;
        }
        #intro {
          margin: 0 15% 0 15%;
        }
        #intro-content {
          overflow: hidden;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
          position: absolute;
          width: 66vw;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          z-index: 1;
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
        #user-name {
          font-size: 2rem;
        }
        #user-role {
          border: 1px solid white;
          padding: 1.5%;
          border-radius: 10px;
        }
        #intro-btns {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: left;
          align-items: center;
        }
        footer {
          overflow: hidden;
          padding: 15px 0;
          width: 100%;
          background-color: #202830;
          text-align: center;
          position: relative;
          bottom: 0;
          z-index: 1;
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
          main {
            margin-bottom: 5%;
            padding: 20% 0 0 0;
            width: 100%;
            height: auto;
          }
          #intro, #about, #services, #portfolio, #contact {
            overflow: hidden;
            margin: auto;
            width: 80vw;
            height: auto;
            z-index: 1;
          }
          #intro {
            margin: 0 10% 0 10%;
          }
          #intro-content {
            overflow: hidden;
            position: relative;
            width: 100vw;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
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
          #intro-btns {
            justify-content: center;
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