import './App.css';
import Carousel from './components/Carousel/Carousel';
import Certificate from './components/Certificate/Certificate';
import Cryptocurrency from './components/Cryptocurrency/Cryptocurrency';
import Game from './components/Game/Game';
import GraphicTemplate from './components/GraphicTemplate/GraphicTemplate';
import SocialMediaBanner from './components/SocialMediaBanner/SocialMediaBanner';
import Themetask from './components/Themetask/Themetask';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import Hero from './shared/Hero/Hero';
import News from './shared/News/News';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Carousel />
      <Themetask />
      <SocialMediaBanner />
      <GraphicTemplate />
      <Certificate />
      <Game />
      <Cryptocurrency />
      <News />
      <Footer />
    </div>
  );
}

export default App;
