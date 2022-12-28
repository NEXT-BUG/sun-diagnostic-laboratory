import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Toaster />
      <Header />
      <div className={!path.split("/").includes("studio") && "pt-32"}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
