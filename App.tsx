
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Sell from './pages/Sell';
import Promotions from './pages/Promotions';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/promotions" element={<Promotions />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
