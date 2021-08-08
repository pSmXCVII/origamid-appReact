import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './partials/Header';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Produto from './pages/Produto';
import Contato from './pages/Contato';

const App = ()=> {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id" element={<Produto/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
