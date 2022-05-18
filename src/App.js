import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import Hero from './shared/Hero/Hero';
import News from './shared/News/News';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
