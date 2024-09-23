import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Homepage';
import Product from './pages/Product'; 
import Order from './pages/Order';
import Footer from './components/Footer';
import Customer from './pages/Customer';
import Category from './pages/Category';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router> 
      
      <div className='w-full'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/Categories" element={<Category />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;