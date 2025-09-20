import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyGlobalStyles } from './styles/globalStyles';

//containers import
import Home from './containers/Home'
import Header from './containers/Home/Header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <MyGlobalStyles/>
    <Home />
  </StrictMode>
);
