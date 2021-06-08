import GlobalStyle from './styles/global.style';
import { Courses, Footer, Header, Landing, Reviews } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Landing />
      <Courses />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
