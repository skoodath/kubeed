import GlobalStyle from './styles/global.style';
import { About, Contact, Courses, Faq, Footer, Header, Landing } from './components';

const App = () => {
  return (
    <>
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
