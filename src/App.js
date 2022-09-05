import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessCardMockup from './Pages/BusinessCardMockup/BusinessCardMockup';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Hero from './Pages/Shared/Hero/Hero';
import News from './Pages/Shared/News/News';
import Footer from './Pages/Shared/Footer/Footer';
import TextEffect from './Pages/TextEffect/TextEffect';
import AllSocialMediaBanner from './Pages/AllSocialMediaBanner/AllSocialMediaBanner';
import GameAll from './Pages/GameAll/GameAll';
import Login from './Pages/Shared/Login/Login';
import ThemetaskDetails from './Pages/ThemetaskDetailsInfo/ThemetaskDetails/ThemetaskDetails';
import Category from './Pages/Category/Category';
import Categories from './Pages/Categories/Categories';
import { useState } from 'react';
import Recent from './Pages/Recent/Recent';

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      { modal && <Login setModal={setModal} /> }
      <BrowserRouter>
        <Header setModal={setModal} />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/business-card-mockup" element={<BusinessCardMockup />} />
          <Route path="/category/text-effect" element={<TextEffect />} />
          <Route path="/category/social-media-banner" element={<AllSocialMediaBanner />} />
          <Route path="/category/game" element={<GameAll />} />
          <Route path="/theme-detail/:image_id" element={<ThemetaskDetails />} />
          <Route path="/category/:name/:id" element={<Category />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recent/new-design" element={<Recent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <News />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
