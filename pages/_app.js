/**
 * Author: Paurav Shah
 * Date: 2025-02-03
 * Version: 1.0.0
 * License: MIT
 */

// pages/_app.js
import '../styles/global.css';  // Import Tailwind CSS or your custom global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
