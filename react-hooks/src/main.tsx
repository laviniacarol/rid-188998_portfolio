import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyGlobalStyles } from './styles/globalStyles';

//containers import
import Home from './containers/Home/Home'
import Header from './containers/Home/Header';
import Timeline from './containers/Home/Timeline';
import Footer from './containers/Home/Footer';
import Projects from './containers/Home/Projects';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <MyGlobalStyles/>
    <Home />
    <Projects/>
    <Timeline/>
    <Footer/>
  </StrictMode>
);
