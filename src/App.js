import './App.css';
import Carousel from './components/Carousel';
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
      <News />
      <Footer />
    </div>
  );
}

export default App;
