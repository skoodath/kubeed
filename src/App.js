import GlobalStyle from "./styles/global.style";
import {
  About,
  Contact,
  Courses,
  Faq,
  Footer,
  Header,
  Landing,
} from "./components";
import { Helmet } from "react-helmet";

const App = () => {
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
      <GlobalStyle />
      <Header />
      <Landing />
      <Courses />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
