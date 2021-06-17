import GlobalStyle from './styles/global.style';
import { About, Contact, Courses, Faq, Footer, Header, Landing, Reviews } from './components';
import MyMenucontext from './components/context';
import { useState } from 'react';

const App = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
    <MyMenucontext.Provider value={{open, setOpen}}>

      <GlobalStyle />
      <Header />
      <Landing />
      <Courses />
      <Reviews />
      <About />
      <Faq />
      <Contact />
      <Footer />
      </MyMenucontext.Provider>
    </>
  );
}

export default App;
