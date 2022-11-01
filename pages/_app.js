import "../styles/globals.css";
import Toaster from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <div className="hidden">
        <Toaster />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
