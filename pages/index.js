import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { FaFileArrowDown, FaPaperPlane, FaEnvelope, FaArrowsRotate, FaGithub } from "react-icons/fa6";
import { useState, useEffect, useRef } from 'react';
// import {useRouter} from 'next/router';
import { Textarea, Form, Input, Button, Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@heroui/react";
import SimpleImageSlider from "react-simple-image-slider";

// Dynamically import the ClientOnlyComponent with ssr: false
const Navbar = dynamic(() => import('./navbar'), {
  ssr: false, // Ensures this component is only rendered on the client-side
});

// const Map = dynamic(() => import('./map.js'), {
//   ssr: false,
// });

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
  const [action, setAction] = React.useState(null);
  // const router = useRouter();
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track the last scroll position

  // Function to detect scroll direction and active section
  const handleScroll = () => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';

    // Update the last scroll position
    setLastScrollTop(currentScrollTop);

    // console.log(`Scrolling ${scrollDirection}`); // Log scroll direction (up or down)
    if (scrollDirection === 'down') {
      // Load more content, etc.
      // console.log('User is scrolling down');
    } else if(scrollDirection === 'up'){
      // Handle scrolling up actions
      // console.log('User is scrolling up');
    }

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      // console.log('You have reached the bottom!');
      // Trigger a function to load more content here
    } else if(window.scrollY === 0){
      // console.log('You have reached the top!');
      // Trigger a function to load more content here
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is visible in the viewport
            setIsVisible(true);

            const links = document.getElementsByClassName('menuItem');
            for (let i = 0; i < links.length; i++) {
              links[i].classList.remove('activeItem');
            }

            // console.log(entry.target.id + ' section is visible');
            let sectionId = entry.target.id;
            if(sectionId === 'about'){
              let activeLink = document.getElementById('about-item');
              if (activeLink) {
                activeLink.classList.add('activeItem');
              }
            } else if(sectionId === 'services'){
              let activeLink = document.getElementById('services-item');
              if (activeLink) {
                activeLink.classList.add('activeItem');
              }
            } else if(sectionId === 'portfolio'){
              let activeLink = document.getElementById('portfolio-item');
              if (activeLink) {
                activeLink.classList.add('activeItem');
              }
            } else if(sectionId === 'contact'){
              let activeLink = document.getElementById('contact-item');
              if (activeLink) {
                activeLink.classList.add('activeItem');
              }
            }
          } else {
            // Section is not visible
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // 50% of the section should be in the viewport to consider it visible
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    const section1 = sectionRef1.current;
    if (section1) {
      observer.observe(section1);
    }

    const section2 = sectionRef2.current;
    if (section2) {
      observer.observe(section2);
    }

    const section3 = sectionRef3.current;
    if (section3) {
      observer.observe(section3);
    }

    const section4 = sectionRef4.current;
    if (section4) {
      observer.observe(section4);
    }

    // Cleanup observer on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      if (section) {
        observer.unobserve(section);
      }
      if (section1) {
        observer.unobserve(section1);
      }
      if (section2) {
        observer.unobserve(section2);
      }
      if (section3) {
        observer.unobserve(section3);
      }
      if (section4) {
        observer.unobserve(section4);
      }
    };
  }, []);

  const images = [
    { url: "https://heroui.com/images/hero-card-complete.jpeg" },
    { url: "https://heroui.com/images/fruit-1.jpeg" },
    { url: "https://heroui.com/images/fruit-2.jpeg" },
    { url: "https://heroui.com/images/fruit-3.jpeg" },
    { url: "https://heroui.com/images/fruit-4.jpeg" },
    { url: "https://heroui.com/images/fruit-5.jpeg" },
    { url: "https://heroui.com/images/fruit-6.jpeg" },
    { url: "https://heroui.com/images/fruit-7.jpeg" },
    { url: "https://heroui.com/images/fruit-8.jpeg" }
  ];

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
          <section id="intro" ref={sectionRef}>
            <div id="intro-content">
              <div id="photo-div">
                <img id="profile-photo" title="Nimish Shah" src="nimish_photo.png" alt="Nimish Shah Photo"/>
              </div>
              <div id="intro-div">
                <Card id="intro-card">
                  <CardBody id="intro-card-body">
                    <p id="user-name" className="kumar-one-regular">Nimish Shah</p>
                    <p><i><span id="user-role">Graphic Design Specialist | Artist</span></i></p>
                    <br/>
                    <q id="design-quote"><i>Design is always a balanced combination of graphics and text, it looks good when arranged perfectly.</i></q>
                    <br/>
                    <p>Hey there, welcome to my portfolio! I specialize in a wide range of creative work, including graphic design, 3D modeling, and with research &amp; development in visual arts.</p>
                    <br/>
                    <p>My portfolio highlights projects that blend technical precision with artistic vision, spanning from branding and digital content to immersive 3D environments. Each piece showcases a dedication to innovation, pushing the boundaries of design and technology to create visually compelling and functional outcomes.</p>
                    <br/>
                    <p>Kindly, go through my resume for more information and let me know if I'm the person that you might be looking for. Always looking forward to connect with creative minds.</p>
                    <br/>
                  </CardBody>
                  <CardFooter id="intro-card-footer">
                    <div id="intro-btns">
                      <Button id="resume-btn" className="bordered-btn" title="Download Resume" color="primary" variant="bordered" onPress={downloadResume}>
                        <FaFileArrowDown/>&nbsp;Resume
                      </Button>
                      <Button id="email-btn" className="bordered-btn" title="Email" color="primary" variant="bordered" as="a" target="_blank" href="mailto:shahnimish.1969@gmail.com">
                        <FaPaperPlane/>&nbsp;Message
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          {/* <section id="about" ref={sectionRef1}>
            <p id="about-title" className="kumar-one-regular title">About.</p>
          </section> */}

          <section id="services" ref={sectionRef2}>
            <p id="services-title" className="kumar-one-regular title">Services.</p>
            <div id="services-content">
              <p>I create innovative work across creative graphic design, 2D and 3D animation, and advanced 3D projects, driven by research and development. My portfolio showcases everything from striking visual designs and engaging animations to experimental approaches with emerging tools and technologies. Each project highlights my commitment to combining artistic creativity with technical precision to craft distinctive and impactful results.</p>
              <div id="my-services">
                <Card id="graphic-design-services-card" className="services-card border border-gray-400">
                  <CardHeader className="flex gap-3 justify-center">
                    <svg
                      id="graphic-design-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      width="145"
                      height="145"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      imageRendering="optimizeQuality"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      viewBox="0 0 1515 1515"
                    >
                      <g id="Layer_x0020_1">
                        <path
                          fill="#d3d3ff"
                          fillRule="nonzero"
                          d="M165 149h139c10 0 19 9 19 19v53h344v-53c0-10 8-19 18-19h139c10 0 19 9 19 19v53h344v-53c0-10 8-19 18-19h139c10 0 19 9 19 19v139c0 10-9 18-19 18h-139c-10 0-18-8-18-18v-49H951c82 32 155 83 211 149 79 90 128 207 133 335h54c11 0 19 9 19 19v139c0 10-8 18-19 18h-138c-11 0-19-8-19-18V761c0-10 8-19 19-19h47c-5-119-50-227-123-311-74-85-177-145-292-166v42c0 10-9 18-19 18H685c-10 0-18-8-18-18v-42c-115 20-217 80-291 164-74 85-120 194-124 313h54c10 0 18 9 18 19v139c0 10-8 18-18 18H167c-10 0-19-8-19-18V761c0-10 9-19 19-19h48c4-128 54-246 133-337 57-64 129-116 210-147H323v49c0 10-9 18-19 18H165c-10 0-18-8-18-18V168c0-10 8-19 18-19m121 37H184v102h102zm520 0H704v102h102zm520 0h-102v102h102zM287 779H185v102h102zm1044 0h-102v102h102zm-730 243h28c-6-33-16-64-31-94-18-36-42-70-71-102-6-6-7-15-2-22l214-383c4-9 16-12 25-8 3 2 5 5 7 8l214 384c4 7 3 16-3 21-29 32-53 66-71 102-15 30-25 61-31 94h28c18 0 34 7 45 19 12 12 19 28 19 45 0 18-7 34-19 46-5 5-11 10-18 13v202c0 10-8 18-18 18-11 0-19-8-19-18v-196H611v196c0 10-8 18-18 18-11 0-19-8-19-18v-202c-7-3-13-8-18-13-12-12-19-28-19-46 0-17 7-33 19-45s28-19 45-19m65 0h177c6-39 18-75 35-110 18-36 41-69 68-101L773 501v179c17 4 33 13 45 25 16 16 26 38 26 63 0 24-10 47-26 63-17 16-39 26-63 26-25 0-47-10-64-26-16-16-26-39-26-63 0-25 10-47 26-63 13-12 28-21 45-25V501L563 811c28 32 51 65 68 101 17 35 29 71 35 110m242 37H601c-7 0-14 3-19 8s-8 12-8 19c0 8 3 15 8 20s12 8 19 8h307c7 0 14-3 19-8s8-12 8-20c0-7-3-14-8-19s-12-8-19-8M792 731c-10-10-23-16-37-16-15 0-28 6-37 16-10 9-16 22-16 37 0 14 6 27 16 37 9 9 22 15 37 15 14 0 27-6 37-15 9-10 15-23 15-37 0-15-6-28-15-37"
                        ></path>
                        <path fill="none" d="M0 0h1515v1515H0z"></path>
                      </g>
                    </svg>
                  </CardHeader>
                  <Divider />
                  <CardBody className="text-center p-4 overflow-y-hidden">
                    <p id="graphic-design-title" className="kumar-one-regular">Graphic Design</p>
                  </CardBody>
                  <Divider />
                  <CardFooter className="card-footer text-sm text-center p-4 break-words overflow-y-auto">
                    <p id="graphic-design-description">A creative graphic design portfolio showcases my artistic skills, design processes, and versatility. It shows highlighted key projects, such as branding, web design, illustrations, and digital content. Each piece is accompanied by a brief description explaining the concept, and tools used. The design of the portfolio itself reflects my personal style, while being clean, intuitive, and visually engaging, emphasizing typography, color schemes, and layout that align with my work.</p>
                  </CardFooter>
                </Card>
                <Card id="animation-services-card" className="services-card border border-gray-400">
                  <CardHeader className="flex gap-3 justify-center">
                    <svg
                      id="animation-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      width="145"
                      height="145"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      imageRendering="optimizeQuality"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      viewBox="0 0 10000 10000"
                    >
                      <g id="Layer_x0020_1">
                        <path
                          fill="#d3d3ff"
                          fillRule="nonzero"
                          d="M7361 910c242 0 461 98 620 256 158 159 256 378 256 620s-98 461-256 620c-159 159-378 257-620 257s-461-98-620-257-257-378-257-620 98-461 257-620l6-6c159-155 375-250 614-250m447 429c-114-115-273-186-447-186-172 0-328 69-442 180l-6 6c-114 114-185 273-185 447 0 175 70 333 185 448 115 114 273 185 448 185 174 0 333-71 447-185 115-114 185-273 185-448 0-174-70-333-185-447m-5449 827c-67 0-122-54-122-122 0-67 55-121 122-121h1323c67 0 122 54 122 121 0 68-55 122-122 122zm-583 0c-68 0-122-54-122-122 0-67 54-121 122-121h231c68 0 122 54 122 121 0 68-54 122-122 122zm-160 3525c-68 0-122-55-122-122 0-68 54-122 122-122h1322c68 0 122 54 122 122 0 67-54 122-122 122zm-584 0c-67 0-122-55-122-122 0-68 55-122 122-122h232c67 0 122 54 122 122 0 67-55 122-122 122zm2302-1036c68 0 122 55 122 122s-54 122-122 122H2011c-67 0-121-55-121-122s54-122 121-122zm584 0c67 0 122 55 122 122s-55 122-122 122h-232c-67 0-122-55-122-122s55-122 122-122zM2436 2637c68 0 122 55 122 122s-54 122-122 122H1114c-68 0-122-55-122-122s54-122 122-122zm584 0c67 0 122 55 122 122s-55 122-122 122h-232c-67 0-122-55-122-122s55-122 122-122zm1550-154h1555c26 0 51 8 71 22 251 155 517 308 763 469 128 86 202 225 224 373 16 105 5 216-32 315l612 597h776c272 0 434 111 507 258 32 65 46 135 43 206-2 69-19 138-49 202-83 174-263 317-501 317H7350c-36 0-68-16-91-41l-679-664-510 755 816 808c26 26 38 61 36 95l39 2268c5 294-123 485-290 572-69 36-145 55-221 55-75 1-151-16-221-50-176-86-318-279-322-573l-25-1681-655-595-807 1012c-23 31-59 51-100 51H2533c-248 0-420-146-497-329-29-67-44-140-45-212-1-73 12-146 41-213 72-167 235-295 501-295h1299l664-875c-13-41-23-82-30-124-39-237 25-474 188-711l654-949-857-81-834 819c-125 123-297 129-442 62-53-25-103-60-146-103-42-44-77-96-100-154-60-152-39-339 138-514l887-874c84-83 174-138 278-173 99-32 209-45 338-45m1521 243H4570c-103 0-189 10-262 34-68 23-127 59-184 115l-886 874c-94 93-109 182-82 251 10 27 27 52 48 73 21 22 46 40 73 52 59 28 126 29 169-14l875-859c25-25 59-38 96-35l1118 106c21 2 42 9 60 22 55 38 69 113 31 169l-772 1120c-126 182-176 360-148 532 6 35 15 69 27 104 14 18 23 39 25 61 55 120 148 240 280 360l1047 950c24 22 39 53 39 89l26 1734c2 188 84 308 185 357 37 18 76 27 114 26 38 0 76-9 110-27 92-48 162-164 159-353l-38-2228-854-844c-40-41-48-106-15-155l1086-1606c42-71 58-164 45-251-13-84-52-162-119-207zm934 1153-306 454 681 665h1139c133 0 235-80 280-177 17-35 26-71 27-105 1-32-4-64-18-91-34-70-125-123-289-123h-825c-30 0-61-11-85-34zM5046 6027l-172-156c-107-97-193-196-259-297l-626 826c-24 31-60 48-97 48H2533c-152 0-241 65-277 148-16 36-23 75-22 114 0 40 9 82 26 120 41 100 136 180 273 180h1729z"
                        ></path>
                        <path fill="none" d="M0 0h10000v10000H0z"></path>
                      </g>
                    </svg>
                  </CardHeader>
                  <Divider />
                  <CardBody className="text-center p-4 overflow-y-hidden">
                    <p id="animation-title" className="kumar-one-regular">Animation</p>
                  </CardBody>
                  <Divider />
                  <CardFooter className="card-footer text-sm text-center p-4 break-words overflow-y-auto">
                    <p id="animation-description">My animation work spans both 2D and 3D, creating dynamic and engaging visuals that bring ideas to life. In 2D animation, I focus on smooth, expressive motion and storytelling. while in 3D, I craft realistic, immersive animations with attention to detail and depth. From character animation to motion graphics, my work blends technical skill with creative vision, delivering animations that captivate and communicate effectively.</p>
                  </CardFooter>
                </Card>
                <Card id="threed-works-services-card" className="services-card border border-gray-400">
                  <CardHeader className="flex gap-3 justify-center">
                    <svg
                      id="threed-works-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      width={145}
                      height={145}
                      style={{
                        shapeRendering: "geometricPrecision",
                        textRendering: "geometricPrecision",
                        imageRendering: "optimizeQuality",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                      }}
                      viewBox="0 0 2213 2213"
                    >
                      <defs>
                        <style>{".fil0{fill:#d3d3ff;fill-rule:nonzero}"}</style>
                      </defs>
                      <g id="Layer_x0020_1">
                        <path
                          d="m1664 1038-531 248v583l531-248v-583zm-570 207 583-273c4-2 9-3 14-3 15 0 27 12 27 27v642c0 10-6 19-16 24l-583 272c-4 3-8 4-13 4-15 0-27-12-27-27v-642c0-10 6-20 15-24z"
                          className="fil0"
                        />
                        <path
                          d="m534 972 583 273c10 4 16 14 16 24v642c0 15-12 27-27 27-5 0-10-1-14-4l-583-272c-9-5-15-14-15-24V996c0-15 12-27 27-27 5 0 9 1 13 3zm545 314-531-248v583l531 248v-583z"
                          className="fil0"
                        />
                        <path
                          d="m307 1798 230-133-27-47-230 133-28-48-102 154 185-11-28-48zm202-827 578-270V468h-56l83-166 83 166h-56v241l563 266c13 6 19 22 13 36-3 6-8 10-14 13l-590 268c-8 3-17 3-24-1l-580-271c-13-6-19-22-13-36 3-6 8-10 13-13zm597-219L584 996l518 241 526-238-522-247zm957 1105-102-154-28 48-230-133-27 47 230 133-28 48 185 11z"
                          className="fil0"
                        />
                        <path
                          d="M0 0h2213v2213H0z"
                          style={{
                            fill: "none",
                          }}
                        />
                      </g>
                    </svg>
                  </CardHeader>
                  <Divider />
                  <CardBody className="text-center p-4 overflow-y-hidden">
                    <p id="threed-works-title" className="kumar-one-regular">3D Design</p>
                  </CardBody>
                  <Divider />
                  <CardFooter className="card-footer text-sm text-center p-4 break-words overflow-y-auto">
                    <p id="threed-works-description">My 3D work focuses on creating detailed, immersive environments and models for a variety of applications, from product visualization to virtual experiences. I combine technical expertise with a keen eye for aesthetics, ensuring every model is both functional and visually captivating. In R&D, I explore new techniques, tools, and technologies to push the boundaries of design, experimenting with innovative approaches to solve complex visual and interactive challenges.</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          <section id="portfolio" ref={sectionRef3}>
            <p id="portfolio-title" className="kumar-one-regular title">Portfolio.</p>
            <div id="portfolio-content">
              <p>My creative digital graphic work combines bold visuals with thoughtful design to communicate powerful messages. From branding and web design to digital illustrations, I focus on creating visually striking and functional designs that capture attention and convey meaning. Every project showcases my passion for innovation and attention to detail, delivering impactful results tailored to each client's needs.</p>
              <div id="my-portfolio">
                <div className="flex w-full flex-col">
                  <Tabs aria-label="Options" className="flex justify-center" size="md" variant="solid">
                    <Tab key="design" title="2D/3D Design">
                      <Card className="py-4">
                        <CardBody className="overflow-visible py-2 items-center">
                          {/* <div className="slider-container">
                            <SimpleImageSlider
                              width={500}
                              height={500}
                              images={images}
                              showBullets={true}
                              showNavs={true}
                              autoPlay={true}
                              slideDuration={1}
                            />
                          </div> */}

                          <div className="image-deck grid grid-cols-2 gap-4 justify-items-center items-center">
                            <div>
                              <h4 className="text-center">Frontend Radio</h4>
                              <Image
                                alt="Frontend Radio"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/hero-card-complete.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Oranges</h4>
                              <Image
                                alt="Oranges"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-1.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Tangerine</h4>
                              <Image
                                alt="Tangerine"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-2.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Cherries</h4>
                              <Image
                                alt="Cherries"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-3.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="animation" title="2D Animation">
                      <Card className="py-4">
                        <CardBody className="overflow-visible py-2 items-center">
                          {/* <div className="slider-container">
                            <SimpleImageSlider
                              width={500}
                              height={500}
                              images={images}
                              showBullets={true}
                              showNavs={true}
                              autoPlay={true}
                              slideDuration={1}
                            />
                          </div> */}

                          <div className="image-deck grid grid-cols-2 gap-4 justify-items-center items-center">
                            <div>
                              <h4 className="text-center">Avocado</h4>
                              <Image
                                alt="Avocado"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-5.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Lemon</h4>
                              <Image
                                alt="Lemon"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-6.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Banana</h4>
                              <Image
                                alt="Banana"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-7.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Watermelon</h4>
                              <Image
                                alt="Watermelon"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-8.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="cintascotch" title="Cintascotch">
                      <Card className="py-4">
                        <CardBody className="overflow-visible py-2 items-center">
                          {/* <div className="slider-container">
                            <SimpleImageSlider
                              width={500}
                              height={500}
                              images={images}
                              showBullets={true}
                              showNavs={true}
                              autoPlay={true}
                              slideDuration={1}
                            />
                          </div> */}

                          <div className="image-deck grid grid-cols-2 gap-4 justify-items-center items-center">
                            <div>
                              <h4 className="text-center">Frontend Radio</h4>
                              <Image
                                alt="Frontend Radio"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/hero-card-complete.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Oranges</h4>
                              <Image
                                alt="Oranges"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-1.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Tangerine</h4>
                              <Image
                                alt="Tangerine"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-2.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Cherries</h4>
                              <Image
                                alt="Cherries"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-3.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="logo" title="Logo Design">
                      <Card className="py-4">
                        <CardBody className="overflow-visible py-2 items-center">
                          {/* <div className="slider-container">
                            <SimpleImageSlider
                              width={500}
                              height={500}
                              images={images}
                              showBullets={true}
                              showNavs={true}
                              autoPlay={true}
                              slideDuration={1}
                            />
                          </div> */}

<div className="image-deck grid grid-cols-2 gap-4 justify-items-center items-center">
                            <div>
                              <h4 className="text-center">Avocado</h4>
                              <Image
                                alt="Avocado"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-5.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Lemon</h4>
                              <Image
                                alt="Lemon"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-6.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Banana</h4>
                              <Image
                                alt="Banana"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-7.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>

                            <div>
                              <h4 className="text-center">Watermelon</h4>
                              <Image
                                alt="Watermelon"
                                className="object-cover rounded-xl overflow-hidden transition-transform duration-500 hover:scale-95 cursor-pointer"
                                src="https://heroui.com/images/fruit-8.jpeg"
                                width="500rem"
                                height="25rem"
                              />
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" ref={sectionRef4}>
            <p id="contact-title" className="kumar-one-regular title">Contact.</p>
            <div id="contact-content">
              <p>Get in touch to collaborate on bold and innovative digital graphic design that brings your vision to life.</p>
              <div id="contact-details">
                <div id="map-location-div">
                  {/* <Map/> */}
                  <iframe
                      id="google-map-location"
                      className="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.27542983864!2d73.1535135760009!3d22.30542084270851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc89851cd49cf%3A0x2b7d0ee77dd98db8!2sMinaxi%20Co-operative%20Housing%20Society!5e0!3m2!1sen!2sin!4v1737926983280!5m2!1sen!2sin"
                      width="400"
                      height="400"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                  />
                </div>
                <div id="contact-form-div">
                  <Card id="contact-form-card">
                    <CardBody id="contact-form-card-body">
                      <Form
                        id="contact-form"
                        className="w-full max-w-xs flex flex-col gap-4"
                        validationBehavior="native"
                        onReset={() => setAction("reset")}
                        onSubmit={(e) => {
                          e.preventDefault();
                          let data = Object.fromEntries(new FormData(e.currentTarget));

                          // Reset form
                          document.getElementById("contact-form").reset();

                          // Send draft to email client
                          const receiver_email = 'pauravshah1999@gmail.com';
                          const subject = 'Re: Nimish Shah | Portfolio  - ' + data.subject + ' | ' + data.username + ' (' + data.email + ')';
                          const body = data.message;

                          const mailtoLink = `mailto:${receiver_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                          window.location.href = mailtoLink;
                        }}
                      >
                        <Input
                          isRequired
                          id="username"
                          errorMessage="Please enter a valid name"
                          label="Name"
                          labelPlacement="inside"
                          name="username"
                          placeholder="Enter your name"
                          maxLength={200}
                          type="text"
                        />

                        <Input
                          id="email"
                          isRequired
                          errorMessage="Please enter a valid email"
                          label="Email"
                          labelPlacement="inside"
                          name="email"
                          placeholder="Enter your email"
                          maxLength={200}
                          type="email"
                        />

                        <Input
                          isRequired
                          id="subject"
                          errorMessage="Please enter a valid subject"
                          label="Subject"
                          labelPlacement="inside"
                          name="subject"
                          placeholder="Enter your subject"
                          maxLength={200}
                          type="text"
                        />

                        <Textarea
                          isRequired
                          id="message"
                          errorMessage="Please enter a valid message"
                          label="Message"
                          labelPlacement="inside"
                          name="message"
                          placeholder="Enter your message"
                          maxLength={400}
                          type="text"
                        />

                        <div id="contact-form-btns-div" className="gap-2">
                          <Button color="transperant" type="submit" className="bordered-btn">
                            <FaEnvelope/>&nbsp;Send
                          </Button>
                          <Button color="transperant" type="reset" variant="flat" className="bordered-btn">
                            <FaArrowsRotate/>&nbsp;Reset
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
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
          z-index: 1;
        }
        #intro {
          margin: 0 15% 0 15%;
          padding: 10% 0 0 0;
        }
        #intro-content {
          overflow: hidden;
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
         -webkit-filter: drop-shadow(5px 5px 5px #222 );
          filter: drop-shadow(5px 5px 5px #222);
        }
        #profile-photo:hover {
          cursor: pointer;
          -webkit-transform: rotate(-5deg) scale(0.9);
          transform: rotate(-5deg) scale(0.9);
          transition: all .5s;
          opacity: 0.8;
        }
        #intro-div {
          text-align: left;
          padding: 0 0 0 3%;
          width: 50%;
        }
        #user-name, .title {
          font-size: 2rem;
          -webkit-filter: drop-shadow(5px 5px 5px #222);
          filter: drop-shadow(5px 5px 5px #222);
        }
        .title {
          margin: 10% 0 0 0;
          text-align: center;
        }
        #services-content {
          margin: 2% auto;
          overflow: hidden;
          width: 66vw;
          z-index: 1;
          text-align: center;
        }
        #my-services {
          padding: 5% 0 0 0;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        }
        #portfolio-content {
          margin: 2% auto;
          overflow: hidden;
          width: 66vw;
          z-index: 1;
          text-align: center;
        }
        #my-portfolio {
          margin-top: 5%;
          text-align: center;
        }
        .slider-container {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        #contact {
          padding: 0 0 5% 0;
        }
        #contact-content {
          margin: 2% auto;
          overflow: hidden;
          width: 66vw;
          z-index: 1;
          text-align: center;
        }
        #contact-details {
          margin: 5% 0 0 0;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }
        #map-location-div {
          display: flex;
          justify-content: end;
          text-align: right;
          padding: 0 3% 0 0;
          width: 50%;
        }
        .map {
          width: 25rem;
          height: 25rem;
          border-radius: 5%;
        }
        #contact-form-div {
          display: flex;
          justify-content: start;
          text-align: left;
          padding: 0 0 0 3%;
          width: 50%;
        }
        #contact-form-btns-div {
          display: flex;
          justify-content: start;
          width: -webkit-fill-available;
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
            padding: 15% 0 0 0;
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
          .title {
            margin: 20% 0 0 0;
            text-align: center;
          }
          #services-content {
            margin: 3% auto;
            overflow: hidden;
            width: 100vw;
            z-index: 1;
            text-align: center;
          }
          #my-services {
            padding: 5% 0 0 0;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
          }
          #portfolio-content {
            margin: 2% auto;
            overflow: hidden;
            width: 100vw;
            z-index: 1;
            text-align: center;
          }
          #my-portfolio {
            margin-top: 10%;
            text-align: center;
          }
          .slider-container {
            width: 100%;
            height: auto;
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .image-deck {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
          }
          #contact-content {
            margin: 2% auto;
            overflow: hidden;
            width: 100vw;
            z-index: 1;
            text-align: center;
          }
          #contact-details {
            margin: 5% 0 0 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            z-index: 1;
          }
          #map-location-div {
            display: flex;
            justify-content: center;
            text-align: center;
            padding: 0 0 5% 0;
            width: 100vw;
          }
          #contact-form-div {
            display: flex;
            justify-content: center;
            text-align: center;
            padding: 5% 0 0 0;
            width: 100vw;
          }
          #contact-form-btns-div {
            display: flex;
            justify-content: center;
            width: -webkit-fill-available;
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