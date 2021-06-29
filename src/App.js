import GlobalStyle from './styles/global.style';
import { About, Contact, Courses, Faq, Footer, Header, Landing } from './components';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Kubex: Become a Kubernetes Pro!</title>
          <meta name="description" content="Enhance cognitive functions of children using network representations from real world experiences." />
          <meta property="og:title" content="Kubex: Become a Kubernetes Pro!" />
          <meta property="og:description" content="Enhance cognitive functions of children using network representations from real world experiences." />
          <meta property="og:type" content="website" />
       {/*  <meta property="og:url" content="https://www.networked.in/" />
        <meta property="twitter:site" content="https://www.networked.in/" /> */}
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
}

export default App;
