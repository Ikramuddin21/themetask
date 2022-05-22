import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessCardMockup from './components/BusinessCardMockup/BusinessCardMockup';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './shared/Header/Header';
import Hero from './shared/Hero/Hero';
import News from './shared/News/News';
import Footer from './shared/Footer/Footer';
import TextEffect from './components/TextEffect/TextEffect';
import AllSocialMediaBanner from './components/AllSocialMediaBanner/AllSocialMediaBanner';
import GameAll from './components/GameAll/GameAll';
import Login from './components/Login/Login';
import ThemetaskDetails from './components/ThemetaskDetails/ThemetaskDetails';
import Category from './components/Category/Category';
import Categories from './components/Categories/Categories';
import { useState } from 'react';

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
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <News />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
