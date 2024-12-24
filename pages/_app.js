// pages/_app.js
import '../styles/global.css';  // Import Tailwind CSS or your custom global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;