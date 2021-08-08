import React from 'react';
import Produtos from './Produtos';
import '../index.css';
import Head from './Head';


const Home = () => {
  return (
    <div className="content">
      <Head title="Project | Produtos" description="Listagem de produtos" />
      <Produtos/>
    </div>
  )
}

export default Home
