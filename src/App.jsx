import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Homepage';
import Product from './pages/Product'; 
import SideNav from './components/SideNav';
import Order from './pages/Order';
import Footer from './components/Footer';
import Customer from './pages/Customer';

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
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;