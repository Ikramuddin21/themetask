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
import SocialMediaBanner from './components/SocialMediaBanner/SocialMediaBanner';
import GameAll from './components/GameAll/GameAll';
import Login from './components/Login/Login';
import ThemetaskDetails from './components/ThemetaskDetails/ThemetaskDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/business-card-mockup" element={<BusinessCardMockup />} />
        <Route path="/text-effect" element={<TextEffect />} />
        <Route path="/social-media-banner" element={<SocialMediaBanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<GameAll />} />
        <Route path="/theme-detail/:image_id" element={<ThemetaskDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <News />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
