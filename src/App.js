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
        <title>KubeEd: Become a Kubernetes Pro!</title>
        <meta
          name="description"
          content="KubeEd offers premium Kubernetes Courses. Join 50000+ Students. We have a 30 day 100% refund policy."
        />
        <meta property="og:title" content="KubeEd: Become a Kubernetes Pro!" />
        <meta
          property="og:description"
          content="KubeEd offers premium Kubernetes Courses. Join 50000+ Students. We have a 30 day 100% refund policy."
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
