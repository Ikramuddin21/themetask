import './App.css';
import Carousel from './components/Carousel/Carousel';
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
      <News />
      <Footer />
    </div>
  );
}

export default App;
