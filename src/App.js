import GlobalStyle from "./styles/global.style";
import { Header, Landing } from "./components";
import { Helmet } from "react-helmet";
import { lazy, Suspense, useState } from "react";
import MenuContext from "./context";

const Courses = lazy(() => import("./components/courses"));
const About = lazy(() => import("./components/about"));
const Faq = lazy(() => import("./components/faq"));
const Contact = lazy(() => import("./components/contact"));
const Footer = lazy(() => import("./components/footer"));

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Best Kubernetes Courses Online | KubeEd</title>
        <meta
          name="description"
          content="Enroll for best kubernetes courses online. Become a kubernetes expert using simple concepts and be prepared for kubernetes certifications"
        />
        <meta
          property="og:title"
          content="Best Kubernetes Courses Online | KubeEd"
        />
        <meta
          property="og:description"
          content="Enroll for best kubernetes courses online. Become a kubernetes expert using simple concepts and be prepared for kubernetes certifications"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kubeed.com/" />
        <meta property="twitter:site" content="https://www.kubeed.com/" />
      </Helmet>
      <MenuContext.Provider value={{ open, setOpen }}>
        <GlobalStyle open={open} />
        <Header />
        <Landing />
        <Suspense fallback={<div>Loading...</div>}>
          <Courses />
          <About />
          <Faq />
          <Contact />
          <Footer />
        </Suspense>
      </MenuContext.Provider>
    </>
  );
};

export default App;
