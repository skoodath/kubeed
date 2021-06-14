import GlobalStyle from './styles/global.style';
import { Courses, Faq, Footer, Header, Landing } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Landing />
      <Courses />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
