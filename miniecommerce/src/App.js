import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Cart from './component/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './component/Checkout';
import FloatingWhatsAppButton from './component/Buttons/WhatsApp';

function App() {
  return (
    <div className="App">
      <Router>
        <FloatingWhatsAppButton />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/products/:id' element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
