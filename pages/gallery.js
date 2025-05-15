// /**
//  * Author: Paurav Shah
//  * Date: 2025-02-03
//  * Version: 1.0.0
//  * License: MIT
//  */

// import React from "react";
// import Head from 'next/head';
// import { FaGithub } from "react-icons/fa6";
// import { useState, useEffect, useRef } from 'react';
// import { Textarea, Form, Input, Button, Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@heroui/react";
// import styles from '../styles/styles.gallery.module.css';

// export default function Home() {
//   const [action, setAction] = React.useState(null);
//   // const router = useRouter();
//   const sectionRef = useRef(null);
//   const sectionRef1 = useRef(null);
//   const sectionRef2 = useRef(null);
//   const sectionRef3 = useRef(null);
//   const sectionRef4 = useRef(null);
//   const [isVisible, setIsVisible] = useState(false); // Track visibility
//   const [lastScrollTop, setLastScrollTop] = useState(0); // Track the last scroll position

//   // Function to detect scroll direction and active section
//   const handleScroll = () => {
//     const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
//     const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';

//     // Update the last scroll position
//     setLastScrollTop(currentScrollTop);

//     // console.log(`Scrolling ${scrollDirection}`); // Log scroll direction (up or down)
//     if (scrollDirection === 'down') {
//       // Load more content, etc.
//       // console.log('User is scrolling down');
//     } else if(scrollDirection === 'up'){
//       // Handle scrolling up actions
//       // console.log('User is scrolling up');
//     }

//     if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
//       // console.log('You have reached the bottom!');
//       // Trigger a function to load more content here
//     } else if(window.scrollY === 0){
//       // console.log('You have reached the top!');
//       // Trigger a function to load more content here
//     }
//   };

//   return (
//     <div>
//       <Head>
//         <title>Nimish Shah | Digital Art Gallery</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta property="og:title" content="Nimish Shah | Digital Art Gallery" />
//         <meta property="og:description" content="Digital Art Gallery of Nimish Shah" />
//         <meta property="og:image" content="./nimish_shah_portfolio.jpeg" />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://nimish1969.github.io/gallery" />
//         <link rel="icon" href="./favicon_io/favicon.ico" />
//       </Head>

//       <div id="content-wrapper">
//         <main className={styles.mainContainer}>
//           <h1 id={styles.galleryTitle} className="kumar-one-regular">Digital Art Gallery</h1>
//         </main>

//         <footer id="portfolio-footer" className={styles.footerContainer}>
//           <p>&copy; 2025 Nimish Shah. All rights reserved.</p>
//           <br/>
//           <Button id="github-btn" className="bordered-btn" title="Nimish Shah | GitHub" color="primary" variant="bordered" as="a" target="_blank" href="https://github.com/nimish1969">
//             <FaGithub/>&nbsp;nimish1969
//           </Button>
//           <br/>
//           <br/>
//           <code className={styles.code}>Crafted with ❤️ by 
//             <a target="_blank" title="Paurav Shah | GitHub" href="https://github.com/paurav11">
//               &nbsp;Paurav Shah
//             </a>
//           .</code>
//         </footer>
//       </div>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family:
//             -apple-system,
//             BlinkMacSystemFont,
//             Segoe UI,
//             Roboto,
//             Oxygen,
//             Ubuntu,
//             Cantarell,
//             Fira Sans,
//             Droid Sans,
//             Helvetica Neue,
//             sans-serif;
//             background: #000;
//         }
//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   );
// }