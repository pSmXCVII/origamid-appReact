import React from 'react'
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = () => {
  const produtos = [
    { name: 'Notebook', props: ['16gb ram', '512gb'] },
    { name: 'Smartphone', props: ['2gb ram', '128gb'] },
  ];
  let key = 0;
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto)=>(
        <Produto key={"p"+key++} {...produto}/>
      ))}
    </section>
  )
}

export default Produtos
