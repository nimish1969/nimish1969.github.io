// pages/_app.js
import '../styles/global.css';  // Import Tailwind CSS or your custom global styles
import '../styles/tailwind.css'; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
